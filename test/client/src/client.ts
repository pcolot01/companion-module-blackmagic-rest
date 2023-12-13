import fs from 'fs';

import OpenAPIClientAxios from "openapi-client-axios";
import type { Client as Camera } from "./types/BlackmagicCameraControlRestAPI";
import { Components, Paths } from "./types/BlackmagicCameraControlRestAPI";

export type GetIris = Components.Schemas.GetIris;
export type PutIris = Components.Schemas.PutIris;

export type AddIrisRequest = Paths.PutLensIris.RequestBody;
export type AddIrisResponse = Paths.PutLensIris.Responses.$200;

const jsonData = JSON.parse(fs.readFileSync('../../externals/BlackmagicRestOpenApi/dist/0.1.0/BlackmagicCameraControlRestAPI.json', {encoding: 'utf-8'}));

const api = new OpenAPIClientAxios({definition: jsonData, withServer: 0});

//api.withServer('SwaggerHub API Auto Mocking');

async function main() {
  const client = await api.init<Camera>();
  const client2 = await api.getClient<Camera>();

  const irisResponse = await client.getLensIris();
  const iris = irisResponse.data; // Iris[] inferred as type
  console.log('getIris response', irisResponse.status, iris);

  const irisRequest = await client.putLensIris(null, { "apertureStop":5.3, "normalised":1.0, "apertureNumber":3.2 });

  console.log('putIris request', irisRequest.status, irisRequest.data);

}

main();