const { model, Schema } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    default: '',
  },
  description: { 
    type: String, 
    default: '',
  },
  imageUrl: { 
    type: String, 
    default: '',
  },
})

module.exports = model('Product', schema);