// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // 2. Add your credentials from step 1
  production: false,
  firebase: {
    apiKey: "AIzaSyC89hJYbU9ANZL8kF8g6Cdvb3JJ_R3urug",
    authDomain: "auth-sark.firebaseapp.com",
    projectId: "auth-sark",
    storageBucket: "auth-sark.appspot.com",
    messagingSenderId: "51528512644",
    appId: "1:51528512644:web:59929f40195e5e53fa7ed1"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
