FROM node:7.10.0-alpine
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# build node module
RUN npm install yarn -g
COPY yarn.lock /usr/src/app
RUN yarn --production
COPY build /usr/src/app
EXPOSE 8899
CMD [ "node", "server.bundle.js" ]
