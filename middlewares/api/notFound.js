const { StatusCodes } = require('http-status-codes');

const { NOT_FOUND } = StatusCodes;

module.exports = (req, res) => {
  const error = new Error();
  error.message = 'Route not found';
  return res.status(NOT_FOUND).json(error.message);
};
