# companion-module-blackmagic-rest
This plugin enable usage of Blackmagic REST API to control their camera device

In the src directory, the plugin source could be found

In the test directory, the following project are present:
- a client typescript stub in nodejs to test a camera
- server typescript stubs in nodejs to mock a camera
- a set of examples for companion environment

============== Annex ================

REM Repository cloning from github

cd MyLocalGitHub

git clone https://github.com/pcolot01/BlackmagicRestOpenApi BlackmagicRestOpenApi

=====================================

REM Repository creation

REM defining project structure

cd MyLocalGitHub

mkdir companion-module-blackmagic-rest

cd companion-module-blackmagic-rest

mkdir externals

REM Creation on github of the repository
REM Clone of github repository using GitHub Desktop for Windows

cd externals

git submodule add https://github.com/pcolot01/BlackmagicRestOpenApi.git BlackmagicRestOpenApi

git submodule update --init --recursive