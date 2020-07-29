# About

This repository containes the react application that provides an interactive map service.
The app uses the OpenStreetMap database provided by the online service https://photon.komoot.de/ to encode human-entered location names into geographic coordinates.

I developed this app on top of the template provided by the Create React App package. I used Redux for state management and Redux-thunk for handling asynchronous interactions with the store.
I also used the Axios library to request the web service, the React Router library to support html5 routing, SCSS for styles preprocessing, and Bootstrap for CSS styling, and OpenLayers for displaying map data. I hope you enjoy the app.

[Link to the deployed application.](https://nm-demo.herokuapp.com/)


## Commands
- to install dependecies: `npm install`
- to start the application dev server: `npm run start`
- to build the release version: `npm run build` 


## How to use

``` bash
npm install
npm run start
```
After launching the application in a command shell, the user can interact with the application's user interface.  
The user must open the page `http://localhost:3000/` in a browser and enter any location/place name (e.g. musée d’orsay).

The app has been tested in the following environments:

|Os |`$ node -v`|`$ npm -v` |
|:--|:--|:--|
|Raspbian GNU/Linux 10 (buster)|v12.18.3|6.14.4|
|Ubuntu 18.04|v11.15.0|6.7.0|
