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
- [x] Fix hot module
### BACK(only serve the front) & API(all the http request)   
- [x] Fix the webpack config (serve the production file of react redux etc)
- [ ] serve gzip file ? nginx ? nodejs ?
- [ ] Ignore the API or not ?  
- [x] Find a way to set the adress of the server with webpack or configfile ? like if DEV = localhost:9000 else 198.... environement variable check DefinePlugin
- [ ] Make Isomorphic apps ?
- [ ] others ?
### FRONT
- [ ] redux-observable
- [ ] Use redux-observable for all the apps SideEffect
- [x] Hot module
- [ ] Implement some reusable compo like a Navbar etc
- [x] Implement React-router example
- [ ] Implement React-redux-router
- [ ] Implement redux-form
- [x] Implement SCSS (Webpack)
- [x] Implement extract-text-webpack-plugin (Webpack-prod)
- [x] Implement dist /image (Webpack)
- [ ] Utilisation dun framework sass ? fondation ?? without JS ?
- [ ] Other ?
### IMPLEMENT test
- [ ] front test
- [ ] back test
