# Zerobase Core Platform

This repository contains the front end for the Zerobase smart tracing platform. Refer to the [smart-tracing-api repo](https://github.com/zerobase-io/smart-tracing-api) for the API server.

## Running the project

    git clone https://github.com/zerobase-io/smart-tracing.git
    cd smart-tracing
    npm install
    npm start

## GitHub Actions

Commits to master will automatically rebuild staging.zerobase.io.

## Building

    REACT_APP_API_HOST=<url-of-the-api-host> npm run build

## Project structure

- `./build` - all the files in this folder are served as static assets for your site. Do not change files manually in this folder.
- `./src` - Contains all of the front end code we write that is bundled up and served. The build process is only currently set up to handle changes to controller.ts.
-  `./tests` - Contains UI automation for both Desktop and Mobile (emulated) versions using Jest and Puppeteer. 

## Testing
Image comparison is provided by Applitools if the APPLITOOLS_API_KEY environment variable is set. See the examples below for running the different test suites:

Running mobile tests locally:

    npm run test-mobile

Running desktop tests locally:

    npm run test-desktop

Running mobile tests locally (headless):

    npm run test-mobile-headless

Running desktop tests locally (headless):

    npm run test-desktop-headless
