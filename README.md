# Movie and TV Show E-commerce Website

This project is an e-commerce website for buying movies and TV shows. The website uses microservices architecture and is built on AWS cloud platform. The website allows users to browse through a wide range of movies and TV shows, add them to their cart, and make purchases using secure payment methods.

## Architecture

The project is developed using microservices architecture. The microservices are divided into separate modules, each responsible for a specific task. The modules communicate with each other through APIs. The following microservices are used in this project:

- **Front-end Microservice**: Responsible for displaying the user interface of the website to the users.

- **Catalog Microservice**: Responsible for managing the catalog of movies and TV shows available for purchase.

- **History Microservice**: Responsible for managing the history of ordered been purchase.

All of the microservices are deployed on AWS platform using the following services:

- **Amazon EC2**: Provides virtual servers for deploying the microservices.

## Technology Stack

The following technologies are used in this project:

- **Node.js**: Used for server-side scripting and developing microservices.

- **React.js**: Used for developing the front-end user interface.

- **Express.js**: Used as a web application framework for Node.js.

- **MongoDB**: Used as the primary database for storing user and catalog data.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository.

2. Install Node.js and MongoDB on your machine.

3. Run the following command to install the required dependencies.  
- First in the root directory of the project
```
$ npm install
$ npm i nodemon
$ npm install -g nodemon
```
- Second go to each directory of the packages directory and install the following `npm`
```
packages/ecommerce
$ npm install vite 
$ npm install

packages/backend-items 
$ npm install express 
$ npm install

packages/backend-history
$ npm install express
$ npm install
```


4. Create an `.env` file in the root directory of the project and add the following environment variables:

```
MONGODB_ACCESS=<your-mongodb-connection-url>
VITE_BACKEND_ITEMS_API_URL = <api-of-category-items>
VITE_BACKEND_HISTORY_API_URL = <api-of-history-order>
```

5. Start the microservices using the following command:

```
npx lerna run dev --stream --parallel
```

6. The website will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! To contribute to this project, please follow these steps:

1. Fork the repository.

2. Make your changes and commit them.

3. Create a pull request.
