# Zerobase Core Platform

This repository contains the front end for the Zerobase smart tracing platform. Refer to the [smart-tracing-api repo](https://github.com/zerobase-io/smart-tracing-api) for the API server.

## Running the project

    git clone https://github.com/zerobase-io/smart-tracing.git
    cd smart-tracing
    npm install
    npm run start

## GitHub Actions

Commits to master will automatically rebuild staging.zerobase.io.

## Project structure

- `./build` - all the files in this folder are served as static assets for your site. Do not change files manually in this folder.
- `./src` - Contains all of the front end code we write that is bundled up and served.
- 
# Libraries/Tools used

* [Create React App](https://github.com/facebook/create-react-app/issues/6180) - [Typescript](https://create-react-app.dev/docs/adding-typescript#getting-started-with-typescript-and-react)

* [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
    * We are specifically adding [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) for [Theme configuration](https://getbootstrap.com/docs/4.5/getting-started/theming/)

* [CRACO - Create React App Configuration Override](https://www.npmjs.com/package/@craco/craco):
    * [craco-alias](https://github.com/risenforces/craco-alias): Relative path aliasing. (CRA only supports [Absolute Imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports))

* [React Feather Icons](https://github.com/feathericons/react-feather) for feather icon components

* [React Router](https://reactrouter.com/web/guides/quick-start) for site routing

# FAQ
* Why are all the packages being used, put into the `dependencies` section of `package.json`?
    * https://github.com/facebook/create-react-app/issues/6180