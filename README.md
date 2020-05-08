# Disney-Wait-Times
Hybrid application that display the wait times for Walt Disney Studios et Disneyland Park Paris. Made with React Native and ❤️

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Data
I made an API (just here: https://github.com/MolletSimon/api-themeparks) that call the cubehouse/themeparks api (https://github.com/cubehouse/themeparks).
My API get the datas, add some infos (like user device that made the call or the datetime of the call), also the cubehouse API was just a package so I decided to host mine so I can call it with just this link : https://api-themeparks-waittimes.cleverapps.io/api-docs

## Features
I added some screenshots in the readme but heres some features
  - List all rides from Studios and Park in the form of card with the wait time and the name of the ride, the card is grey if the ride is closed, green if the wait time is under 20min, yellow if between 20 and 40min and red if superior to 40min.
  - Add a ride to your "favorites", you can find all your favorites in the third tab.
  - On a click on a card, you can consult some information about the ride : if the fastpass is available, if the single rider is available, if the photopass is available and what is the status of the ride (open, closed, refurbishment)
  - On the screen "infos of a ride" you can click on the marker (up left the screen) that will open a native map (AppleMaps on iOS, GoogleMaps on Android) with a marker on the ride and another marker on your position (if you allow access to) to find the way to the ride.
  - There are 3 tabs, Parc Disneyland, Walt Disney Studios, Favorites, you can access the tabs by swipping horizontally


> This is my first react native app, I learned the tech with just some crashcourse on react and the react-native documentation

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

## Screenshots


### Tech

I used some tech to do this wonderful app

* [React Native] - A framework for building native apps using React
* [Web Storm] - The smartest JavaScript IDE
* [XCode] - The apple IDE

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd Theme-Parks
$ npm install
```
or
```sh
$ cd Theme-Parks
$ yarn
```

If you are on iOS you may need to make a pod install 
```sh
$ cd ios
$ pod install
```
### Plugins

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

You can run on 3 differents environments :
will run react-native ios
```sh
$ yarn run ios
```
will run react-native android
```sh
$ yarn run android
```
will run with expo 
```sh
$ yarn run web
```

### Todos

 - Favorites have some bug on some situations
 - Add chart to see the evolution of the wait time of a ride

License
----

MIT





   [React Native]: <https://reactnative.dev>
   [Web Storm]: <https://www.jetbrains.com/fr-fr/webstorm/>
   [XCode]: <https://apps.apple.com/fr/app/xcode/id497799835?mt=12>


