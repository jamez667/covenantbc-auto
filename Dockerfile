FROM node:alpine

RUN apk add make

ADD package.json .
RUN yarn install

ADD . .

RUN make ping
