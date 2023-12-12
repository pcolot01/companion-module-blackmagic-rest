import 'source-map-support/register';
import path from 'path';
import OpenAPIBackend, { Request } from 'openapi-backend';
import express from 'express';
import morgan from 'morgan';

import { Request as ExpressReq, Response as ExpressRes } from 'express';

const app = express();
app.use(express.json());

// define api
const api = new OpenAPIBackend({
  definition: path.join(__dirname, '../api/', 'BlackmagicCameraControlRestAPI.yaml')
});

api.init();

// handler for getPets operation in openapi.yml
api.register('getIris', async (c, req: express.Request, res: express.Response) =>
  res.status(200).json([{ continuousApertureAutoExposure: false, apertureStop: 15.3, normalised: 10.0, apertureNumber: 5.2 }])
)
// return 400 when request validation fails
api.register('validationFail', (c, req: express.Request, res: express.Response) =>
  res.status(400).json({ err: c.validation.errors }),
)
// return 404 when route doesn't match any operation in openapi.yml
api.register('notFound', (c, req: express.Request, res: express.Response) =>
  res.status(404).json({ err: 'not found' }),
)
// mock responses for operations with no registered handler
api.register('notImplemented', (c, req: express.Request, res: express.Response) =>{
    const { status, mock } = c.api.mockResponseForOperation(c.operation.operationId);
    return res.status(status).json(mock);
  }
)

// logging
app.use(morgan('combined'));

// use as express middleware
app.use((req, res) => api.handleRequest(req as Request, req, res));

// start server
app.listen(9000, () => console.info('api listening at http://localhost:9000'));