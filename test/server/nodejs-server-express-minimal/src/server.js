"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const path_1 = __importDefault(require("path"));
const openapi_backend_1 = __importDefault(require("openapi-backend"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const api = new openapi_backend_1.default({
    definition: path_1.default.join(__dirname, '../../../../externals/BlackmagicRestOpenApi/dist/', '0.1.0/BlackmagicCameraControlRestAPI.json'),
    apiRoot: "/control/api/v1",
});
api.init();
// handler for getLensIris operation in BlackmagicCameraControlRestAPI.yaml
api.register('getLensIris', async (c, req, res) => res.status(200).json([{ continuousApertureAutoExposure: false, apertureStop: 15.3, normalised: 10.0, apertureNumber: 5.2 }]));
// handler for putLensIris operation in BlackmagicCameraControlRestAPI.yaml
api.register('putLensIris', async (c, req, res) => {
    const putLensIrisRequest = c.request.requestBody;
    res.status(200).json([{ apertureStop: putLensIrisRequest.apertureStop, normalised: putLensIrisRequest.normalised, apertureNumber: putLensIrisRequest.apertureNumber }]);
});
// return 400 when request validation fails
api.register('validationFail', (c, req, res) => res.status(400).json({ err: c.validation.errors }));
// return 404 when route doesn't match any operation in BlackmagicCameraControlRestAPI.yaml
api.register('notFound', (c, req, res) => res.status(404).json({ err: 'not found' }));
// mock responses for operations with no registered handler
api.register('notImplemented', (c, req, res) => {
    const { status, mock } = c.api.mockResponseForOperation(c.operation.operationId);
    return res.status(status).json(mock);
});
// logging
app.use((0, morgan_1.default)('combined'));
// use as express middleware
app.use((req, res) => api.handleRequest(req, req, res));
// start server
app.listen(9000, () => console.info('api listening at http://localhost:9000'));
