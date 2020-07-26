const mongoose = require('mongoose');

const newItemsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
}, { timestamps: true })

module.exports = mongoose.model('NewItems', newItemsSchema);