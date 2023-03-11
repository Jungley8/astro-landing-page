FROM node:lts-alpine AS build
WORKDIR /app

COPY package.json .
RUN yarn

COPY --chown=node:node . .
RUN yarn build

USER node
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD node ./dist/server/entry.mjs
