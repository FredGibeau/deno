# Deno Sandbox
This project was purely made as a Deno's sandbox where I will be experimenting and docucumenting my learnings of Deno.

# Dev Environment (Dev Container)
While learning, I thought it would be great to also experiment with Dev Containers & Visual Studio. As of right now, I only have a barebone of what a Deno's Dev Container should have in order to run, log and debug. I will update the Dev Container as I need more functionalities from it (Ports, Users, ...) and keep this documentation updated as I progress.

## Dev Environment references
### Requirements : 
- Docker Desktop
- Visual Studio Code
- Docker Extension for VS Code

### Getting Started : 
In order to get the base structure in a new project, in VS Code do the following : 

1. CTRL + SHIFT + P

2. Select "Remote-Container: Add Development Container Configuration Files..."

3. Select "All Configuration"

4. Search and select "Deno"

At this point, you could use this image and configuration (and maybe you should.. ?). However, I wanted to experiment with another image than the one automaticaly provided with Microsoft. If you chose to use the default, you can skip the Dockerfile and the devcontainer.json section.

### Dockerfile :
I'm using an already built Ubuntu's Docker image that has Deno preinstalled. I tried to setup a docker image from scratch by my own (Alpine & Ubuntu) but I got repeatedly prompt errors saying that commands (Sudo, Apt...) weren't found. Since the goal of this learning wasn't specific to Linux/Docker, I decided to use a prebuilt image that was well known and up to date.  

### devcontainer.json :
Simple VS Code config file that references the DockerFile and specifies the different required/recommended plugins to use while developping.

### launch.json
VS Code launch configuration file that specifies how to execute the program. 
NB : For reference see this link : 

https://deno.land/manual@v1.9.2/getting_started/debugging_your_code

Beware : In order to see the logs in the DEBUG CONSOLE window, we need to add this line : 
> "outputCapture": "std"

### TODO
Here is a list of things I need to verify, would like to do or would like to experiment :
- Install / Setup Git in the Dev Container.
- Setup a User instead of using the Root.
- I WILL have to setup some ports forwarding eventually. I will do it when the time comes.
- Setup the must have addons to develop with (Lint, Tests, Utilitaries...)

# Deno
Experimentation in progress... !