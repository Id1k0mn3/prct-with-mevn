const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        default: '',
    },

    description: {
        type: String,
        default: '',
    },

    image: {
        type: String,
        default: '',
    },

    products: [
        {
            type: ObjectId,
            ref: 'product'
        }
    ],
})

module.exports = model('Category', schema);