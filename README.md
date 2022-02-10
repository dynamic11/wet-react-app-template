# :rocket: WET React Project Template

[![Linting Check](https://github.com/dynamic11/wet-react-app-template/actions/workflows/ci-tests.yml/badge.svg?branch=master)](https://github.com/dynamic11/wet-react-app-template/actions/workflows/ci-tests.yml)

:warning: This project is early stages of development. We are working hard to implement more features. :warning:

## Introduction

This is a template repo that can be used as a starting point for any React based project wishing to utilize the CDTS App Template and WET-React components.

**This project utilizes:**

- [Create React App](https://github.com/facebook/create-react-app): For project bootstrapping
- [WET-React](https://github.com/dynamic11/wet-react): For WET themed React components
- [arcnovus/wet-boew-react](https://www.npmjs.com/package/@arcnovus/wet-boew-react): For CDTS page layouts
- [CDTS Templates](https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html): For page layout guidelines

## Getting Started

### How to run locally

1. clone the repo to you local machine
2. open terminal inside the project directory
3. install packages using `npm install`
4. launch app using `npm start`
5. navigate to `http://localhost:3000` to see the project running

### Project scripts

Here is what each script in the `package.json` does:

- `start`: see 'CRA Scripts' section below
- `test`: see 'CRA Scripts' section below
- `build`: see 'CRA Scripts' section below
- `eject`: see 'CRA Scripts' section below
- `lint`: runs ESlint to check for issues
- `lint:fix`: runs ESlint to check for issues and auto fixes them
- `prettier`: runs prettier to check for code styling issues
- `prettier:fix`: runs prettier to check for code styling issues and auto fixes them

## CRA Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
