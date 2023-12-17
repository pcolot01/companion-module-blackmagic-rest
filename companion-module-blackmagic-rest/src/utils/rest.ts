import fs from 'fs';

import OpenAPIClientAxios from "openapi-client-axios";
import type { Client as Camera } from "../types/BlackmagicCameraControlRestAPI";
import { Components, Paths } from "../types/BlackmagicCameraControlRestAPI";

export type GetIris = Components.Schemas.ApertureStop;
export type PutIris = Components.Schemas.Normalised;

export type AddIrisRequest = Paths.PutLensIris.RequestBody;
export type AddIrisResponse = Paths.PutLensIris.Responses.$200;

const jsonData = JSON.parse(fs.readFileSync('./src/types/BlackmagicCameraControlRestAPI.json', {encoding: 'utf-8'}));

const api = new OpenAPIClientAxios({definition: jsonData, withServer: 'Local Mocking'});

//api.withServer('Local Mocking');
// by server object (override)
// api.withServer({ url: 'http://localhost:8080/control/api/v1/', description: 'Test server mockup by Swagger' });

export async function rest() {
  const client = await api.init<Camera>();

  const irisResponse = await client.getLensIris();
  const iris = irisResponse.data; // Iris[] inferred as type
  console.log('getIris response', irisResponse.status, iris);

  let addIrisRequest : AddIrisRequest = { "apertureStop":7.0, "normalised":0.0, "apertureNumber":9.0 };
  const irisRequest = await client.putLensIris(null, addIrisRequest);

  console.log('putIris request', irisRequest.status, irisRequest.data);

}
