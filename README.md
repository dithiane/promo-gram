# Developer Docs
----------------
# Installation:
  1. Clone the project down
  2. Run `npm install` in the project folder
  3. Run `npm install` in the `functions` folder
    
      You're ready to run! See NPM Scripts below for info on running locally.

# Important Scripts:
> *All of these scripts should be run from the top-level project directory unless otherwise stated.*

## Development:

### `npm run dev`

  Runs the React front-end and Firebase Functions back-end simultaneously and watches for changes.

  *Front-end (React): Port 3000* <br>
  *Back-end (Functions): Port 5000*

  > *Firebase emulators run on port 5000 by default, *but* if Hosting and Functions are run simultaneously (i.e. with `firebase serve`), then Hosting will run on 5000 and Functions will run on 5001.*

### `npm start`
  Only runs the React front-end. <br>
  *(Port 3000)*

### `npm run functions` ***or*** `firebase serve --only functions`

  Only runs the Firebase Functions back-end. <br>
  *(Port 5000)*

### `npm run build`

  Compiles the app for production to the `build` folder. <br>
  It bundles React AND Firebase in production mode and optimizes the build for the best performance.

  ***After*** running `build` you can run:
  - `firebase deploy` to deploy the app to Firebase.
  - `firebase deploy --only functions` to only deploy Functions.
  - `firebase serve` to see a *simulated deployment* in the Hosting emulator on your local machine (see `firebase serve` below).

## Production:
> *You must run `npm run build` before any of the following commands can be run.*

### `firebase serve`
  > *Changes to **front-end** will **NOT** be reflected in the Hosting emulator until project is re-compiled and emulator server is restarted.*

  This command is for testing the app in a simulated production environment without actually deploying it to Firebase. Changes made to front-end will not be reloaded during this emulation.

  Takes what is in the `build` folder and serves it on a local Hosting emulator. 
 
  *Hosting (Front-End): Port 5000* <br>
  *Functions (Back-End): Port 5001*

### `firebase deploy --only functions`

  Deploys the compiled Functions from the `build` folder to Firebase.

### `firebase deploy`

  Deploys the entire compiled application from the `build` folder to Firebase.


