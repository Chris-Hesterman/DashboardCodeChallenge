FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./build ./build
COPY ./server ./server
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install


