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


========== Server side ===================
REM Generation of server stub /nodejs-server to test the camera

Set the Camera url in swagger
Export as server-stub: nodejs-server
unzp in dir a_directory
cd a_directory
read README


REM from the Nodejs configured command prompt

npm start

open http://localhost:8080/docs

use the application to send/receive information from the camera




=============== Client side ==============

REM Generation of client stub javascript

REM defining project structure

cd project

mkdir src

mkdir src\types


REM initializing old javascript

npm init -y


REM install typescript

npm install --save-dev typescript --loglevel verbose  


REM defining dev dependencies

REM install axios and axios-client

npm install --save-dev axios --loglevel verbose
npm install --save-dev openapi-client-axios --loglevel verbose
npm install --save-dev openapi-client-axios-typegen --loglevel verbose

npm install --save @types/js-yaml --loglevel verbose
npm install --save @types/node --loglevel verbose


REM generate types from OpenApi specification

npx openapicmd typegen ./PIERRECOLOT_1-Blackmagic_Camera_API-0.1.0-resolved.yaml > src/types/PIERRECOLOT_1-Blackmagic_Camera_API-0.1.0-resolved.d.ts
REM openapi read ./PIERRECOLOT_1-Blackmagic_Camera_API-0.1.0-resolved.yaml --format=json --dereference --bundle > ./src/PIERRECOLOT_1-Blackmagic_Camera_API-0.1.0-resolved.json


REM setup typescript

npx tsc --init 

REM set in tsconfig.json:

"outDir": "./dist/",


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


npm run build
REM or npm run watch-build

npm start






