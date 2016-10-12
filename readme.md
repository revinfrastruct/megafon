# Megafon

## Prerequisites
+ `docker`
+ `docker-compose`

## Installation
+ `cd api; npm install`
+ `cd browser; npm install`
+ `$ docker-compose up`
+ `$ open http://localhost:5000`

Note: Since the local filesystem is mounted on top of the container filesystem you must `npm install` the node modules locally. [Better answer](http://stackoverflow.com/a/32785014).
