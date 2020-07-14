// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  fireBaseConfig: {
    apiKey: "AIzaSyC_-kQIg4S1I56CxXw10TdcllM80RXwmu8",
    authDomain: "login-ng-3dc2f.firebaseapp.com",
    databaseURL: "https://login-ng-3dc2f.firebaseio.com",
    projectId: "login-ng-3dc2f",
    storageBucket: "login-ng-3dc2f.appspot.com",
    messagingSenderId: "334747415074",
    appId: "1:334747415074:web:100596227edb9f0a94d07b"

  },

  fireStoreConfig: 'gs://login-ng-3dc2f.appspot.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
