# react-redux-sagas
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
## General Explain & TODO
- [ ] Fix some general eslint rules  && and eslint bug on some rules
- [ ] Fix the dependencies Dev / normal
### BACK(only serve the front) & API(all the http request)   
- [ ] Fix the webpack config (serve the production file of react redux etc)
- [ ] serve gzip file ? nginx ? nodejs ?
- [ ] Ignore the API or not ?  
- [x] Find a way to set the adress of the server with webpack or configfile ? like if DEV = localhost:9000 else 198.... environement variable check DefinePlugin
- [ ] If use NodeJS API, Make Isomorphic apps ?
- [ ] others ?
### FRONT
- [ ] Use Sagas or RXJS ??? redux-observable
- [ ] Use Sagas for all the apps SideEffect
- [ ] Use react-router
- [ ] Hot module
- [ ] Implement some reusable compo like a Navbar etc
- [ ] Implement React-router example
- [x] Implement SCSS (Webpack)
- [x] Implement extract-text-webpack-plugin (Webpack-prod)
- [x] Implement dist /image (Webpack)
- [ ] Utilisation dun framework sass ? fondation ?? without JS ?
- [ ] Other ?
### IMPLEMENT test
- [ ] front test
- [ ] back test
