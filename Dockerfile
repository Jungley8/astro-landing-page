FROM node:lts-alpine AS build
WORKDIR /app

COPY package.json .
RUN yarn

COPY . .
RUN yarn build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD node ./dist/server/entry.mjs
