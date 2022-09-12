const genericCrud = require('./generic.controller');
const { Doctor } = require('../model')

module.exports = {
  ...genericCrud(Doctor)
};