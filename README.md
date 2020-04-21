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
