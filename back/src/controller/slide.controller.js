const genericCrud = require('./generic.controller');
const { Slide } = require('../model')

module.exports = {
  ...genericCrud(Slide)
};