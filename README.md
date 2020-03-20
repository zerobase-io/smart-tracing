Zerobase Core Platform
=============

We use [Keystone 4](https://v4.keystonejs.com/) as a flexible CMS to manage this project.

# TODO

* Doctor/Medical Professional test confirmation flow
* COVID-19 incidents dashboard utilizing [Covid-19-api](https://github.com/mathdroid/covid-19-api)
* Landing Page Revision
* Documentation Framework
* Blog / Article Framework seperate from the core 

## Building the project

You'll need to have [Node.js](https://nodejs.org/en/download/) installed and [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) installed on your device. If you don't have these installed, please click to link and follow instructions on how to do so.
    
    git clone https://github.com/JohnCLo/Zerobase.git
    cd zerobase
    npm install --save

Now all dependancies will be installed. TODO we will reduce the number of uncessary repos and update ones marked critical by npm audit.

### Configuring the project defaults

Before initializing the project lets go over the folder structure a little bit: 
At the base repository you will see keystone.js. This is our configuration file. You can read more about the options to configure a keystone.js instance [here](https://v3.keystonejs.com/docs_configuration). In this configuration file you will also find the option fields for 'mongo' and 'cloudinary'. Cloudinary is a free image CDN. The default connection string for in a non-production deployment will be mongodb://localhost/zerobase-staging. This will connect to your local mongodb instance. In a production environment the mongo connection uri will default to variables we set in our .ENV file. For security purposes we do not share this .ENV file, which holds our actual mongo uri connection string and cloudinary string on the github for obvious reasons.

Likewise the cloudinary uri defaults to a staging cloudinary instance we have set up seperately. However the application currently does not store any user images so cloudinary is not relevant. We only keep it since Keystone may display errors for sample test database fields that have image if the cloudinary uri is not set in the config.

### Building

Now let's move on to /build-main.js. This is our old school build process. It will compress all js to /public/main.min.js and css to /public/styles.min.css. You can add new front end dependancies by specifying the pathname to the front end dependancies. 

### Project structure

*   `routes/index.js` - this is the file that binds urls to specific view controllers. Files in `./routes/views/*.js` are automatically imported as `routes.views.{script}` ready to be bound.
*   `./templates` - this is the folder that holds the templates for your views. It would typically match the structure of your `./routes` folder fairly closely. this is where the [pug](https://pugjs.org/api/getting-started.html) templates are located. Pug is similar to handlebars, but has some of the atomization we see in newer frameworks like React and Vue through js includes and require. It compiles into html. This makes it highly flexible, but also very compatible with even older browsers. Right now index.pug is one big file TODO would be to break this up into multiple components.
*   `./public` - all the files in this folder are served as static assets for your site. Customise and add your own css, client-side javascript, images, etc. here. Any `.less` files will be automatically compiled into `.css` files.
*   `./models` - these files are included by `./models/index.js` and each one sets up a different database model in your application. If you add more, be sure to add them to the index file! this is where the Mongoose models with special keystone fields are located. Please visit [keystone docs](https://v4.keystonejs.com/api/field/) for more information on specific field types.

### Intial Admin User

Finally...
/updates/ This file is creates an admin user for your local mongodb on the first initialization and gives you access to your local keystone administrative interface. The default path to access the GUI would be localhost:3000/admin. This way you can view all the data easily. On our production version we disable this interface for security reasons. 

When you run in production, it is strongly recommended you change your password immediately from the default in this file.

### Run it!

You'll need to start a local mongodb instance: 

If you installed from a .zip on Mac, open new terminal window and run

    mongod

If you installed mongodb using docker

    docker run -d -p 27017:27017 mongo:latest


If you installed mongodb using brew

    brew services start mongodb


To initialize the project you'll want to build all the JS and CSS files and then initialize the keystone instance like so:

    node build.js
    node keystone.js

You should see in your console:

`{your app name} is ready on port 3000`

TODO everytime you update specified CSS or JS files you will need to rebuild. You can forgo building entirely if you directly link to all individual CSS and JS files in index.pug.



### Setting up your accounts and environment for cloud hosting:

First, sign up for free accounts for the following services used by features in the demo site:

*   [Cloudinary](https://cloudinary.com/)
*   [Mandrill](https://www.mandrill.com/)
*   [Embed.ly](https://embed.ly/)

Then, create a `.env` file in the project folder (the one with this readme) and fill in the following values:

    CLOUDINARY_URL={your cloudinary url}
    MANDRILL_APIKEY={your mandrill api key}
    MANDRILL_USERNAME={your mandrill username}
    EMBEDLY_APIKEY={your embedly key}

**This file is ignored by the default .gitignore settings. When you put your project into production, replicate the env variables above, and add settings for the following:**

**DO NOT push any api secret keys to git, even if they are your own**

    NODE_ENV=production
    COOKIE_SECRET={a random string to encrypt cookies}
    MONGO_URI={your mongo connection uri}
    GA_DOMAIN={your google analytics domain} // optional
    GA_PROPERTY={your google analytics property} // optional
    PORT={the port to listen on} // defaults to 3000, automatically set by paas (e.g. heroku)

**On Heroku you would click settings on the dashboard and enter in these environemntal variables**

