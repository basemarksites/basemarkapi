const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
        type: String
    },
    product_title: {
        type: String
    },
    product_category: {
        type: String
    },
    product_size: [{
        type: String
    }],
    description: {
        type: String
    },
    price: {
        type: Number
    },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);