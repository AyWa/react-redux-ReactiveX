FROM node:7.10.0-alpine
# Create app directory
RUN mkdir -p /usr/src/app
ADD yarn.lock /usr/src/app/yarn.lock
ADD package.json /usr/src/app/package.json
COPY build /usr/src/app
WORKDIR /usr/src/app
# build node module
RUN npm install yarn
RUN yarn --production
EXPOSE 8888
CMD [ "node", "server.bundle.js" ]
