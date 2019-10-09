FROM node:alpine

ADD package.json .
RUN npm install

ADD . .
