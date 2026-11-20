# Chrysler Club Website

### The official website for the Chrysler Restorers Club of New Zealand

> Author: Bryan Crombach

## Node

- run `npm i` to install dependencies
- run `npm run dev` to run in dev mode
- run `npm run build` to build project

## Docker

### Initialisation:

- run `docker build --secret id=env,src=.env -t chrysler-club-image .` to create latest version of the docker image
- run `docker run --name chrysler-club-container -p 1936:1936 chrysler-club-image` to create docker container

### Updating the image/container:

- run `docker build --secret id=env,src=.env -t chrysler-club-image .` to create latest version of the docker image
- run `docker rm chrysler-club-container` to remove the existing container
- run `docker run --name chrysler-club-container -p 1936:1936 chrysler-club-image` to create the new docker container

### Useful commands:

- run `docker start chrysler-club-container` to **_START_** the existing container
- run `docker restart chrysler-club-container` to **_RESTART_** the running container
- run `docker stop chrysler-club-container` to **_STOP_** the running container
- run `docker logs chrysler-club-container` to **_VIEW THE CONTAINER LOGS_**
