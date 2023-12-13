"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const axios_1 = __importDefault(require("axios"));
const wait_on_1 = __importDefault(require("wait-on"));
jest.setTimeout(15000);
describe('express-ts example', () => {
    let start;
    let client;
    beforeAll(async () => {
        client = axios_1.default.create({ baseURL: 'http://localhost:9000', validateStatus: () => true });
        start = (0, child_process_1.spawn)('npm', ['start'], { cwd: __dirname, detached: true, stdio: 'inherit' });
        await (0, wait_on_1.default)({ resources: ['tcp:localhost:9000'] });
    });
    afterAll(() => process.kill(-start.pid));
    test('GET /pets returns 200 with mocked result', async () => {
        const res = await client.get('/pets');
        expect(res.status).toBe(200);
        expect(res.data).toEqual([{ id: 1, name: 'Odie' }]);
    });
    test('GET /pets/1 returns 200 with mocked result', async () => {
        const res = await client.get('/pets/1');
        expect(res.status).toBe(200);
        expect(res.data).toEqual({ id: 1, name: 'Garfield' });
    });
    test('POST /pets returns 201 with mocked result', async () => {
        const res = await client.post('/pets', {});
        expect(res.status).toBe(201);
        expect(res.data).toEqual({ id: 1, name: 'Garfield' });
    });
    test('GET /pets/1a returns 400 with validation error', async () => {
        const res = await client.get('/pets/1a');
        expect(res.status).toBe(400);
        expect(res.data).toHaveProperty('err');
    });
    test('GET /unknown returns 404', async () => {
        const res = await client.get('/unknown');
        expect(res.status).toBe(404);
        expect(res.data).toHaveProperty('err');
    });
});
