const { model, Schema } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    default: '',
  },
  link: { 
    type: String, 
    default: '',
  },
})

module.exports = model('MenuItem', schema);