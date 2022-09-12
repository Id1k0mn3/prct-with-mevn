const genericCrud = require('./generic.controller');
const { Description } = require('../model')

module.exports = {
  ...genericCrud(Description)
};