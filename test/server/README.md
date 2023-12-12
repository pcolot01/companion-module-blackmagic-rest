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

REM Generation of server stub server to simulate the camera
REM based on https://github.com/openapistack/openapi-backend/tree/main/examples/express-ts-mock

REM Installation from project source

npm install

Try the endpoints:

curl -i http://localhost:9000/getIris
curl -i http://localhost:9000/getIris/1
curl -i -X POST -d {} http://localhost:9000/putIris




============== Annex ================

REM building process

REM defining project structure

cd server

mkdir src

mkdir src\types


REM initializing old javascript

npm init -y


REM defining dependencies
  
npm install --save express --loglevel verbose
npm install --save morgan --loglevel verbose
npm install --save openapi-backend --loglevel verbose
npm install --save source-map-support --loglevel verbose


REM defining dev dependencies

npm install --save-dev @types/express --loglevel verbose
npm install --save-dev @types/jest --loglevel verbose
npm install --save-dev @types/morgan --loglevel verbose
npm install --save-dev @types/node --loglevel verbose
npm install --save-dev axios --loglevel verbose

npm install --save-dev concurrently --loglevel verbose
npm install --save-dev jest --loglevel verbose
npm install --save-dev nodemon --loglevel verbose
npm install --save-dev ts-jest --loglevel verbose
npm install --save-dev tslint --loglevel verbose
npm install --save-dev typescript --loglevel verbose
npm install --save-dev wait-on --loglevel verbose


REM Defining scripts and checking dependencies  in package.json

{
  "name": "server",
  "version": "1.0.0",
  "description": "Mock server for Blackmagic camera",
  "author": "",
  "license": "ISC",
  "keywords": [],
  "main": "index.js",
  "scripts": {
    "postinstall": "npm run build",
    "build": "tsc",
    "watch-build": "tsc -w",
    "start": "node dist/index.js",
    "watch-start": "nodemon --delay 2 -w dist/ -x 'npm run start'",
    "dev": "concurrently -k -p '[{name}]' -n 'typescript,api' -c 'yellow.bold,cyan.bold' npm:watch-build npm:watch-start",
    "lint": "tslint --format prose --project .",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "morgan": "^1.10.0",
    "openapi-backend": "^5.10.5",
    "source-map-support": "^0.5.21"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.11",
    "@types/morgan": "^1.9.9",
    "@types/node": "^20.10.4",
    "axios": "^1.6.2",
    "concurrently": "^8.2.2",
    "jest": "^29.7.0",
    "nodemon": "^3.0.2",
    "ts-jest": "^29.1.1",
    "tslint": "^6.1.3",
    "typescript": "^5.3.3",
    "wait-on": "^7.2.0"
  }
}


REM setup typescript

npx tsc --init 

Edit tsconfig.json with the following values:
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2017",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "lib": ["es7", "esnext.asynciterable"], // [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    "moduleResolution": "node", //"node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    "paths": {
      "*": [
        "node_modules/*",
        "src/types/*"
      ]
    },
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
    // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  },
  "include": [
    "**/*"
  ]
}
