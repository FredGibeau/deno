# Deno Sandbox
This project was purely made as a Deno's sandbox where I will be experimenting
and docucumenting my learnings of Deno.

# Dev Environment (Dev Container)
While learning, I thought it would be great to also experiment with Dev
Containers & Visual Studio. As of right now, I only have a barebone of what a
Deno's Dev Container should have in order to run, log and debug. I will update
the Dev Container as I need more functionalities from it (Ports, Users, ...) and
keep this documentation updated as I progress.

## Dev Environment references

### Requirements :
- Docker Desktop
- Visual Studio Code
- Docker Extension for VS Code

### Getting Started :
In order to get the base structure in a new project, in VS Code do the following
:

>1. CTRL + SHIFT + P

>2. Select "Remote-Container: Add Development Container Configuration Files..."

>3. Select "All Configuration"

>4. Search and select "Deno"

At this point, you could use this image and configuration (and maybe you
should.. ?). However, I wanted to experiment with another image than the one
automaticaly provided with Microsoft. If you chose to use the default, you can
skip the Dockerfile and the devcontainer.json section.

### Dockerfile :
I'm using an already built Ubuntu's Docker image that has Deno preinstalled. I
tried to setup a docker image from scratch by my own (Alpine & Ubuntu) but I got
repeatedly prompt errors saying that commands (Sudo, Apt...) weren't found.
Since the goal of this learning wasn't specific to Linux/Docker, I decided to
use a prebuilt image that was well known and up to date. Here is the reference to the used image : 
https://hub.docker.com/r/hayd/deno

### docker-compose.yml
I didn't need this file until I need a database. I'll update this section whenever a new need comes.
For further reference of this file, please check the Mongo DB section.

### devcontainer.json :
Simple VS Code config file that references the DockerFile and specifies the
different required/recommended plugins & settings to use while developping.

### launch.json
VS Code launch configuration file that specifies how to execute the program. NB
: For reference see this link :

https://deno.land/manual@v1.9.2/getting_started/debugging_your_code

Beware : In order to see the logs in the DEBUG CONSOLE window, we need to add
this line :

```json
"outputCapture": "std"
```

### Installed Extensions
While I tried to kept the extensions as minimal as possible while coding, I still find that some provided some great utilities for (almost) any kind of projects. Here is the list and explanation of all the extensions provided in the dev containter.

#### Deno
The Deno extensions that allows us to Lint, Format and Intellisense our code. To be removed if you use this as a reference for non Deno project.

#### Docker
Gives us Lint, Format and Intellisense for our Docker files. 

#### GitLens
Provides great utilities for everything related to Git : Commits, Changes, Histories... !

### TODO
Here is a list of things I need to verify, would like to do or would like to
experiment :

- Setup a User instead of using the Root for the dev container.
- I WILL have to setup some ports forwarding eventually. I will do it when the
  time comes.
- Setup the must have addons to develop with (Tests & other utilitaries)

# Deno

## Dev Environment
Since Deno comes with his own Lint and Format, some setup needs to be done inside VS Code (or dev containers) to be able to get the best of it. 

1. Make sure that the Deno Plugin is installed : 
https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno

2. To enable the linter and the formater, you will have to configure your settings inside VS Code. However, if you are using a dev container, you will need to add, manualy, at least those lines in the devconainer.json file :
```json
   "settings" : {
    "editor.formatOnSave": true, // Nice to have if you want the automatic format on save
    "diffEditor.codeLens": true, // Nice to have if you use code lens
    "editor.defaultFormatter": "denoland.vscode-deno",
    "deno.lint": true,
    "deno.suggest.completeFunctionCalls": true,
    "deno.enable": true,
    "deno.unstable": true,
    "deno.codeLens.implementations": true, // Nice to have if you use code lens
    "deno.codeLens.referencesAllFunctions": true, // Nice to have if you use code lens
    "deno.codeLens.references": true, // Nice to have if you use code lens
  }
```

3. Don't forget to rebuild the container to apply changes made in the .devcontainer folder.

## Oak
Oak is the Koa alternative for Deno. It's a middleware framework for Deno's http server. For more information on Oak, visit https://github.com/oakserver/oak
For this part, I followed along this tutorial : https://blog.logrocket.com/building-a-restful-api-in-deno-with-oak-and-mongodb/ while also applying some 
folder structure that was taken from my past Dotnet Core experience (MVC).

### server.ts
Main entry of the server. This file is for the creation and the configuration of the server.

### router.ts
Routes configurations for the server

### Models (.ts)
The different types (models) definitions returned by the API and used by the server. 
TODO : Eventualy, we will need to use DTOS in between the future database (data layer)
and the server.

### Controlers (.ts)
The different actions that the API will have to serve.

### Fun alternative to Oak that deserves to be considered
 - Deno-Express (based on Node Express) : https://github.com/NMathar/deno-express

## Mongo DB
Mongo is supported with Deno and here is the module for it : https://deno.land/x/mongo.
The configuration of Mongo to this project was a combined effort of this tutorial : https://blog.logrocket.com/building-a-restful-api-in-deno-with-oak-and-mongodb/
And the documentation in the module web page, since the tutorial was a little behind the Mongo module version.

### docker-compose.yml
An update to Docker (dev container) was needed since we also needed a different server that would strictly run our Mongo instance. For a full documentation of the Mongo image, please refer to this page : https://hub.docker.com/_/mongo

### mongoClient.ts
This files provides connections and configurations regarding the Mongo Database.