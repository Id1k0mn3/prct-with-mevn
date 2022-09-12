const genericCrud = require('./generic.controller');
const { MenuItem } = require('../model')

module.exports = {
  ...genericCrud(MenuItem)
};