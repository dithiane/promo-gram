This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  To contribute, clone the project down and run `npm install` in the project folder.
    
  (You may also have to run `npm install` in the `functions` folder for Firebase Functions dependencies)

# Important Scripts

## Development Scripts:

### `npm run dev`
  Starts up the React front-end and Firebase back-end for you, and refreshes them when changes are made.

  Front-end (React): Port 3000 <br>
  Back-end (Functions): Port 5001

### `npm run build`

  Builds the app for production to the `build` folder. <br>
  It correctly bundles React AND Firebase in production mode and optimizes the build for the best performance.

  After running `build` you can run `firebase deploy` to deploy the app to Firebase Hosting,<br> 
  or `firebase serve` to see a *simulated deployment* in the Hosting emulator on your local machine (see `firebase serve` below).

### `npm start`
  Only starts the React front-end. <br>
  (Port 3000)

### `firebase serve`
  Takes what is in the `build` folder and deploys it to a local Hosting emulator, simulating the deployed app. <br>
  (Port 5000)

  ***Caution***: This command is primarily for testing the app in a simulated production environment (Firebase Hosting) without actually deploying it to Firebase. **To make live changes to both the front-end and back-end while they are running, use `npm run dev`.**

  ***Explanation***: the front-end that this script serves at localhost:5000 is pulled from the compiled code in the `build` folder. 
  Making changes to back-end code in the `functions` folder will be reflected immediately, but changes to front-end code in the `src` folder will not be reflected until the npm `build` script is run again.

## Other Scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


