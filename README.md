# react-redux-ReactiveX
## Installation
Please use yarn   
`yarn install`   
or   
`npm install`   
## Dev   
To launch webpack dev serveur   
`npm run dev`   
## Prod
To build   
`npm run build`   
To launch the server serving the front   
`npm run prod`   
## General Explain
### BACK(only serve the front) & API(all the http request)   
- [ ] make docker image to deploy
  - [x] node serve webapps
  - [ ] find a way to configure easily port
  - [ ] opti ? NGINX / PM2 / docker compose etc
- [x] use node-prerender
- [ ] Make Isomorphic apps ?
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
