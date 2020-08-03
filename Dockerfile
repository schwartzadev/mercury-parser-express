FROM node:11
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .
EXPOSE 5555

CMD [ "npm", "start" ]
