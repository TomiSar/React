# React
React Getting started
Overview
The Basics
Modern JavaScript Crash course
The GiHhub Cards app
The Star Match game
Setting up the Development environment

Create React App is an environment for learning React. It's environment to build React single-page application
You need to install Node => 8.10 and npm >=5.6
Check node, npm and npx version version CMD 
node -v
npm -v
npx -v

Create React App CMD
npx create-react-app app-name
cd app-name
npm start

npx is a package runner tool that comea along with the npm (node package manager)
By default start script React starts application on your http://localhost:3000

npm start

> gettingstarted@0.1.0 start C:\yourpath
> react-scripts start
Starting the development server...
Compiled successfully!

You can now view gettingstarted in the browser.

  Local:            http://localhost:3000/
  On Your Network:  yournetworkIP:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

port can be changed in package.json file by setting port on start script line 
"start": "react-scripts start", --> "start": "set PORT=3006 && react-scripts start",

> gettingstarted@0.1.0 start C:\yourpath
> set PORT=3006 && react-scripts start
Starting the development server...
Compiled successfully!

You can now view gettingstarted in the browser.

  Local:            http://localhost:3006/
  On Your Network:  yournetworkIP:3006