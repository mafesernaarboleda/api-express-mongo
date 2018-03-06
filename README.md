# API Hotel

API of Hotels built with Node.JS, Express.JS and MongoDB to be used in a React Native application.

- Built with Node.js and Express
- Mongoose schema

## Express Router and Routes

| Route           | HTTP Verb | Description                          |
| --------------- | --------- | ------------------------------------ |
| /api/hotels     | GET       | Get list of hotels                   |
| /api/hotels/:id  | GET       | Get a single hotel                   |
| /api/hotels/search/:filter  | GET       | Get a list of hotels by search |


## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`
- [Node.js and npm](nodejs.org) Node >= 8 LTS

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running.

3. Example document in collection `Holes`.
```
{
    "price": 349709,
    "stars": 4,
    "pictures": [
        {
            "url": "https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpgmh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027"
        }
    ],
    "name": "VELOS",
    "phoneNumber": "+1 (948) 432-3271",
    "address": "741 Clarkson Avenue, Ypsilanti, Puerto Rico, 302",
    "about": "Elit officia irure qui ut tempor pariatur excepteur pariatur tempor est. Id officia velit mollit qui. Pariatur officia ex cupidatat et voluptate labore reprehenderit officia quis do do exercitation incididunt.",
    "loc": [
        6.223612,
        -75.586811
    ]
}
```

3. Run `npm run dev` to start the development server. It should automatically open the client in your browser when ready.

4. Open browser `http://localhost:3000/api/hotels`.

## Deployment

It is used platform as a service (PaaS), for the deployment of the [API](https://almundotest.herokuapp.com/) using the HEROKU CLI and following the [guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app).

## Author

* **Maria Fernanda Serna Arboleda** - *FullStack JavaScript Developer* - [Github](https://github.com/mafesernaarboleda)

See also the list of [contributors](https://github.com/mafesernaarboleda/api-express-mongo/contributors) who participated in this project.

## License

This project is licensed under MIT - see the [LICENSE](LICENSE) file for details

