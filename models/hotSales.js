const mongoose = require('mongoose');

const hotSalesSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
}, { timestamps: true })

module.exports = mongoose.model('HotSales', hotSalesSchema);