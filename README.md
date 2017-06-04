# react-redux-ReactiveX
## Installation
Please use yarn   
`yarn install`   
or   
`npm install`   
## General Explain
### Dev
start:   
`npm run dev`   
It will run 2 server:
- Isomorphic server: default `http://localhost:8888`   
- Webpack Hot reload server : default `http://localhost:9999`   
to check if Isomorphic work well, you can add a throttle in chome -> dev-> network.   
(there is no style in dev for Isomorphic)   
### Build
build:   
`npm run build`   
It will build the isomorphic server and the front end.
### Prod
build and run:   
`npm run prod`   
It will build the isomorphic server and the front end and then launch them.
(if you want to test only isomorphic delete frontend.bundle.js)
### Docker
- build image:   
`npm run docker-image`   
Will build the docker image

- run image:   
`npm run docker-start`   
Will start the docker image -> default `http://localhost:8080`

- build and run:
`npm run docker`   

### BACK(only serve the front) & API(all the http request)   
- [ ] make docker image to deploy
  - [x] node serve webapps
  - [ ] find a way to configure easily port
  - [ ] opti ? NGINX / PM2 / docker compose etc
- [x] use node-prerender
- [x] Make Isomorphic apps ?
- [x] set your api adress in frontend/src/api/config
- [ ] others ?
### FRONT
- [x] redux-observable
- [x] Use redux-observable for all the apps SideEffect
- [x] Hot module
- [x] Implement some reusable compo like a Navbar etc
- [x] Implement React-router
- [x] Implement React-redux-router
- [x] Implement React-redux-router Example
- [x] Implement redux-form
- [x] Implement SCSS (Webpack)
- [x] Implement extract-text-webpack-plugin (Webpack-prod)
- [x] Implement dist /image (Webpack)
- [x] framework scss: http://bulma.io/
- [x] fix webpack compile even if eslint error
- [ ] use graphQL ?
- [ ] Other ?
### IMPLEMENT test
- [x] front test
