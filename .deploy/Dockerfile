FROM node:13.8.0-slim

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
COPY .env.example ./.env

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 80

CMD [ "node", "app.js" ]