# Redux toolkit user management

## Purpose
This app is a simple user management app with mock data that simulates api calls. It is an opportunity to try out the syntax for creating reducers and actions from [redux-toolkit](https://redux-toolkit.js.org/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Demo deployment

A demo deployment of this app can be found on [netlify](https://dvberzon-redux-toolkit-user-management.netlify.app/)

## Api endpoints.

The app mocks out the following API endpoints:

- GET `/api/users`: retrieve list of users
- POST `/api/users`: create a user
- PUT `/api/users/:id`: update a user
- DELETE `/api/users/:id`: delete a user

- GET `/api/groups`: retrieve list of groups
- POST `/api/groups`: create a group
- PUT `/api/groups/:id`: update a group
- DELETE `/api/groups/:id`: delete a group

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

