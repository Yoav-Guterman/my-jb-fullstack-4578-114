FROM node:22-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

RUN rm -rf ./src

CMD npm start