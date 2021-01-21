# Ndbxaposin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##Get Firebase Cloud Messaging enabled

### 1. Installing Firebase

```
npm install @angular/fire --save
```

### 2. Create Manifest JSON

Create a manifest.json file directly in the src folder.

The file contains

```JSON
{
  "gcm_sender_id": "103953800507"
}
```
gcm_sender_id is same for ALL application in the world, do not change it.


Register manifest.json in index.html

```html
<head>
...
<link rel="manifest" href="/manifest.json">
...
</head>
```
### 3. Creating firebase-messaging-sw.js

The JavaScript contains the service worker, which ensures that the browser
can receive server notification.

The firebase-messaging-sw.js contains the service worker which allows to 
receive notification in the application as well as in the browser in case the
app is closed.

You need to setup your own registration in the Google console:

TODO: Please add according description where to find the according IDs





