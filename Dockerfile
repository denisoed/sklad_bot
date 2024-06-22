FROM node:20-alpine

ENV APP_ROOT /src

WORKDIR ${APP_ROOT}

COPY ./package.json ${APP_ROOT}
COPY ./yarn.lock ${APP_ROOT}

RUN yarn install

COPY . ${APP_ROOT}

ARG bot_token
ARG site_url
ENV BOT_TOKEN=${bot_token}
ENV SITE_URL=${site_url}

CMD ["yarn", "start"]
