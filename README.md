# David's Portfolio

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed Site](#deployed-site)
- [License](#license)
- [Questions](#questions)

## Description

This is my online portfolio, it is built using React. Here you can learn a little bit about myself, also there is a nice showcase displaying some of my projects. You can also download my resume, and email me via a contact form. 

## Installation

To run this project, install it locally using npm:

```
npm install
```

## Usage

After installing npm packages, the application will be invoked by using the following command:

```
npm start
```

To properly deploy the site: 


Install gh-pages:

```
npm install -D gh-pages
```

Edit package.json:

```json
"homepage": "http://<username>.github.io/<repository_name>",
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```

Then run:

```
npm run deploy
```

## Deployed Site
<a href="https://dav3ster.github.io/The-Real-Deal/" target="_blank"  rel="noreferrer">Click here to view my deployed portfolio!</a>

## License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br>
This project is licensed under MIT, for more information please visit [this website](https://opensource.org/licenses/MIT)

## Contact

For any questions, please contact me at davidstew87@gmail.com