/**
 * @author Maria Fernanda Serna
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/hotels              ->  index
 * GET     /api/hotels/:id          ->  show
 */

const Hotel = require('./hotel.model');

function respondWithResult(res, statusCode) {
  const statusCodeLocal = statusCode || 200;
  return (entity) => {
    if (entity) {
      res.status(statusCodeLocal).json(entity);
    }
    return null;
  };
}

function handleEntityNotFound(res) {
  return (entity) => {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return (err) => {
    res.status(statusCodeLocal).send(err);
  };
}

// Gets a list of Hotels
function index(req, res) {
  return Hotel.find().sort({ createdAt: -1 }).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Customer from the DB
function show(req, res) {
  return Hotel.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Get a list hotels by search
function find(req, res) {
  const { filter } = req.params;
  const query = {
    name: { $regex: filter, $options: 'i' },
  };
  return Hotel.find(query).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

module.exports = {
  index,
  show,
  find,
};
