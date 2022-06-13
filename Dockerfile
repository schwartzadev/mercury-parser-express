FROM node:16.15.1
WORKDIR /usr/src/app

ARG PORT
RUN test -n "$PORT"
ENV PORT $PORT

ARG CORS_ORIGIN
RUN test -n "$CORS_ORIGIN"
ENV CORS_ORIGIN $CORS_ORIGIN

COPY package*.json ./

RUN npm ci --only=production

COPY . .
EXPOSE $PORT

CMD [ "npm", "start" ]
