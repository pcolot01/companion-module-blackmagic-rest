============== Installing on Windows 10 Command prompt ==================

Start node.js command prompt as Administrator


REM install chocolatey https://community.chocolatey.org/packages/chocolatey

or

REM upgrade chocolatey

choco upgrade chocolatey      



REM https://github.com/Schniz/fnm

choco install fnm


REM install tools

npm install -g typescript   
npm install -g axios --loglevel verbose
npm install -g openapi-client-axios --loglevel verbose
npm install -g openapi-client-axios-typegen --loglevel verbose
npm install -g js-yaml --loglevel verbose
npm install -g fs --loglevel verbose
npm install -g openapicmd 


================= Configuring Command Prompt ===============================

REM configuring current node version

REM cd C:\Users\Home\Documents\Projects\Companion
node --version > .node-version
FOR /f "tokens=*" %i IN ('fnm env --use-on-cd') DO CALL %i


REM configuring node 18 as default on the project
REM https://github.com/bitfocus/companion-module-base/wiki

fnm use 18
fnm default 18
corepack enable



============== Blackmagic OpenAPi REST specification ================

This is based on https://www.openapis.org/ specifications.

See the repository https://github.com/pcolot01/BlackmagicRestOpenApi

Tools from https://swagger.io/ and https://openapistack.co/



=============== Client side ==============

REM Generation of client stub javascript

npm install

import in companion


============== Annex ================

REM building process

REM defining project structure

cd client

mkdir src
mkdir src\types
mkdir api
mkdir dist

REM initializing old javascript

npm init -y


REM defining dev dependencies

npm install --save-dev @types/js-yaml --loglevel verbose
npm install --save-dev @types/node --loglevel verbose
npm install --save-dev axios --loglevel verbose
npm install --save-dev openapi-client-axios --loglevel verbose
npm install --save-dev openapi-client-axios-typegen --loglevel verbose
npm install --save-dev typescript --loglevel verbose 


REM setup typescript

npx tsc --init 


REM set main and scripts in package.json
{
  "name": "tuto004",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "postinstall": "npm run build",
    "build": "tsc",
    "watch-build": "tsc -w",
    "start": "node dist/index.js",
    "watch-start": "nodemon --delay 2 -w dist/ -x 'npm run start'",
    "dev": "concurrently -k -p '[{name}]' -n 'typescript,api' -c 'yellow.bold,cyan.bold' npm:watch-build npm:watch-start",
    "lint": "tslint --format prose --project .",    
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "axios": "^1.6.2",
    "js-yaml": "^4.1.0",
    "openapi-client-axios": "^7.4.0",
    "openapi-client-axios-typegen": "^7.4.1",
    "typescript": "^5.3.3"
  }
}


REM version 1.0.0


REM generate json without dependencies from OpenApi specification

openapi read ../externals/BlackmagicRestOpenApi/api/1.0.0/CameraControls.yaml --format=json --dereference > ./src/types/BlackmagicCameraControlRestAPI.json

REM generate typescript types from JSON version of OpenApi specification

npx openapicmd typegen ./src/types/BlackmagicCameraControlRestAPI.json > ./src/types/BlackmagicCameraControlRestAPI.d.ts

npm install 
REM or npm run build
REM or npm run watch-build

npm start
