# Simple ToDo App | NodeJS + ExpressJS + Mongoose
[![](https://todo-expressjs.github.uz/img/screenshot.jpg)](https://todo-expressjs.github.uz/)

# Demo
[https://todo-expressjs.github.uz/](https://todo-expressjs.github.uz/ "https://todo-expressjs.github.uz/")

# Installation
```bash
git clone https://github.com/ismoil-nosr/ToDO-nodejs.git
cd ToDO-nodejs/
npm i
cp .env.example .env

# run app 
node app.js
```

## Docker
First create an image:

    sudo docker build -f ./.deploy/Dockerfile -t todo_expressjs

Then run container:

    sudo docker run -d -t -i -e NODE_ENV='development' \ 
    -e DB_HOST='mongodb://localhost' \
    -e DB_DATABASE='todo_expressjs' \
    -e DB_USER='todo_expressjs' \
	-e DB_PASSWORD='password' \
    -p 80:80 \
	-p 443:443\
    --name todo_expressjs

## Docker-compose
```bash
git clone https://github.com/ismoil-nosr/ToDO-nodejs.git
cd ToDO-nodejs/
docker-compose up -d
```