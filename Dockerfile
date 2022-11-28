FROM debian:11.5 as build

    RUN apt-get update -yq \
        && apt-get install curl gnupg -yq \
        && curl -sL https://deb.nodesource.com/setup_16.x | bash \
        && apt-get install nodejs -yq \
        && apt-get clean -y

    ADD . /app/
    WORKDIR /app
    RUN npm install -g npm && npm install express
    CMD npm run start
    USER root
    