// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  LOG_LEVEL: 5, // Debug log
  ROOT_URL: 'http:/firebase.com',
  firebaseConfig: {
    apiKey: 'AIzaSyCHplG7A-jjpYhkOu48FqQKtHZTVnvdhzs',
    authDomain: 'chess-app-b4368.firebaseapp.com',
    databaseURL: 'https://chess-app-b4368.firebaseio.com',
    projectId: 'chess-app-b4368',
    storageBucket: '',
    messagingSenderId: '971441285958'
  }
};
