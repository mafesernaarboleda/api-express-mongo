# API Hotel

API of Hotels built with Node.JS, Express.JS and MongoDB to be used in a React Native application.

- Built with Node.js and Express
- REST API with authentication scheme

## Express Router and Routes

| Route           | HTTP Verb | Description                          |
| --------------- | --------- | ------------------------------------ |
| /api/hotels     | GET       | Get list of hotels                   |
| /api/users/:id  | GET       | Get a single hotel                   |

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`
- [Node.js and npm](nodejs.org) Node >= 8 LTS

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `npm run dev` to start the development server. It should automatically open the client in your browser when ready.

4. Open browser `http://localhost:3030/api/hotels`.

