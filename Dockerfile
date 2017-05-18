FROM node:7.10.0-alpine
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# build node module
COPY package.json /usr/src/app
RUN npm install --production
COPY build /usr/src/app
EXPOSE 4200
CMD [ "node", "backend.bundle.js" ]
