FROM node:12.16.3-alpine

WORKDIR /usr/app/express-postgress

COPY ./express-postgres/package*.json ./

RUN npm install

COPY ./express-postgres .

EXPOSE 3000

CMD ["npm", "start"]