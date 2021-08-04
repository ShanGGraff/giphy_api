## Template For Further Project README.mds

# Application Name

#### Brief description of application:

#### **By Shane Graff**

#### Table of Contents

1. [Technologies Used](#technologies)
2. [Description](#description)
3. [Setup/Installation Requirements](#setup)
4. [Additional Setup/Installation Note for Windows Users](#mac)
5. [Specifications](#specs)
6. [Known Bugs](#bugs)
7. [License](#license)
8. [Contact Information](#contact)

## Technologies Used <a id="technologies"></a>

* Babel
* Bootstrap
* CSS
* css-loader
* eslint
* eslint-loader
* HTML5
* package-json
* Javascript
* Jest
* JQuery
* Node.js
* Node Package Manager
* popper.js
* style-loader
* webpack
* webpack-cli
* webpack-dev-server

## Description <a id="description"></a>

Describe application in detail. What does the application do? What things would you like users and other developers to know about the application.

## Setup/Installation Requirements <a id="setup"></a>

1. Open the terminal on your local machine
2. Install [Node.js](https://nodejs.org/en/) if not already installed
3. Install [Nope Package Manager (npm)](https://www.npmjs.com/) if not already installed on your local machine. You can find installation instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)
4. Navigate to the directory where you will be cloning the project to
5. Clone the project to your current directory using the following command: `git clone https://github.com/ShanGGraff/`
6. Make sure to `cd` into the the cloned project directory. Make sure to be in the root directory of the project
7. Run `npm install` in the terminal to install project environment and required dependencies 
8. Run `npm run build` to create production environment
9. If you'd like to run project in a development server run the following: _`npm run start`_
10. To run Lint, use the following command: `npm run lint`
11. To run tests with Jest, use the following: `npm test`

## Additional Setup/Installation Note for Mac Users <a id="mac"></a>

To get the environment to work properly on a Mac, change line 8 in the package.json file in the root directory to: `"start": "npm run build, webpack-dev-server --open  -mode development",`

Also add .DS_Store to the .gitignore file in the root directory.

## Specifications <a id="specs"></a>

| Behavior | Input | Output |
|:---:|:---:|:---:|
| The program should handle... | When it receives... | It should return... |

## Known Bugs <a id="bugs"></a>
* Known issues

## License
* [MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2021 Creators 

## Contact Information <a id="contact"></a>

* Shane Graff <copellius@gmail.com>
* Github page: https://github.com/ShanGGraff
* LinkedIn: https://www.linkedin.com/in/shanegraff/