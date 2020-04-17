Zerobase Core Platform
=============

This repository contains the front end for the Zerobase smart tracing platform. Refer to the [smart-tracing-api repo](https://github.com/zerobase-io/smart-tracing-api) for the API server.

## Running the project
    
    git clone https://github.com/zerobase-io/smart-tracing.git
    cd smart-tracing
    npm install
    npm run start:dev

### GitHub Actions

Commits to master will automatically rebuild staging.zerobase.io.

### Building

/build.js is our build process. It will compress all js to /public/main.min.js and css to /public/styles.min.css. You can add new front end dependancies by specifying the pathname to the front end dependancies. 

### Project structure

*   `./public` - all the files in this folder are served as static assets for your site. Customise and add your own css, client-side javascript, images, etc. here. Any `.less` files will be automatically compiled into `.css` files.
*   `./src` - Contains all of the front end code we write that is bundled up and served. The build process is only currently set up to handle changes to controller.ts.


