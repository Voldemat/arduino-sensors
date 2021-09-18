FROM node:14

WORKDIR /app

ENV PORT 8000

ADD package*.json ./

RUN npm install

ADD . ./

CMD ["npm", "start"]