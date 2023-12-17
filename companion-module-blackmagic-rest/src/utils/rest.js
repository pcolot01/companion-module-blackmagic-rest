"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rest = void 0;
const fs_1 = __importDefault(require("fs"));
const openapi_client_axios_1 = __importDefault(require("openapi-client-axios"));
const jsonData = JSON.parse(fs_1.default.readFileSync('./src/types/BlackmagicCameraControlRestAPI.json', { encoding: 'utf-8' }));
const api = new openapi_client_axios_1.default({ definition: jsonData, withServer: 'Local Mocking' });
//api.withServer('Local Mocking');
// by server object (override)
// api.withServer({ url: 'http://localhost:8080/control/api/v1/', description: 'Test server mockup by Swagger' });
function rest() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield api.init();
        const irisResponse = yield client.getLensIris();
        const iris = irisResponse.data; // Iris[] inferred as type
        console.log('getIris response', irisResponse.status, iris);
        let addIrisRequest = { "apertureStop": 7.0, "normalised": 0.0, "apertureNumber": 9.0 };
        const irisRequest = yield client.putLensIris(null, addIrisRequest);
        console.log('putIris request', irisRequest.status, irisRequest.data);
    });
}
exports.rest = rest;
