'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Something cool is happening!',
      input: event,
    }),
  };
};

module.exports.awesome = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Something else cool is happening!',
      input: event,
    }),
  };
};
