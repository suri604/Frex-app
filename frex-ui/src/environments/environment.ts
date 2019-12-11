// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  userProfileUrl: 'http://localhost:8093/api/v1/',
  donationServiceURL: "http://localhost:8090",
  environmentServiceURL: "http://localhost:8091",
  partnersServiceUrl: "http://localhost:8092",
  authServiceURL: "http://localhost:8094",

  firebaseConfig1: {
    apiKey: "AIzaSyCoiisUpIXhPaV_-csP03erpjK_350htxk",
    authDomain: "imagedetails-5ce29.firebaseapp.com",
    databaseURL: "https://imagedetails-5ce29.firebaseio.com",
    projectId: "imagedetails-5ce29",
    storageBucket: "imagedetails-5ce29.appspot.com",
    messagingSenderId: "635954914639",
    appId: "1:635954914639:web:7aa894cea93f188f85113a",
    measurementId: "G-8DRMDBJLNZ"
    
  },

  // UserDetails
  firebaseConfig2: {
    apiKey: "AIzaSyDfqw87QXy4LeSDfV6Gdfr6NJYObsV-1nc",
    authDomain: "userprofile-6a14e.firebaseapp.com",
    databaseURL: "https://userprofile-6a14e.firebaseio.com",
    projectId: "userprofile-6a14e",
    storageBucket: "userprofile-6a14e.appspot.com",
    messagingSenderId: "44162171401",
    appId: "1:44162171401:web:2b36000986a6ae4d412ed8",
    measurementId: "G-P4SSVCDJT5"
  },
  firebaseConfig3 : {
    apiKey: "AIzaSyARVEWwsfAK6Ln1D63KEgn1wi_615AtOAA",
    authDomain: "photography-freak.firebaseapp.com",
    databaseURL: "https://photography-freak.firebaseio.com",
    projectId: "photography-freak",
    storageBucket: "photography-freak.appspot.com",
    messagingSenderId: "21030819347",
    appId: "1:21030819347:web:d821437da136417f0c51e6",
    measurementId: "G-KKT6DYM03E"
  },

  firebase:
  {
    apiKey: 'AIzaSyCt5WqpAvJx17qWC6o9tFQXtFMrgXfquqs',
    authDomain: 'volunteer-44353.firebaseapp.com',
    databaseURL: 'https://volunteer-44353.firebaseio.com',
  //  databaseURL: 'https://volunteer-44353/database/firestore/data.firebaseio.com',
    projectId: 'volunteer-44353',
    storageBucket: 'volunteer-44353.appspot.com',
    messagingSenderId: '220361474346',
    appId: '1:220361474346:web:a20efa3db54e19440f9e53',
    measurementId: 'G-6H10S8H5K0'
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
