const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: String,
    image:
    {
        data: Buffer,
        contentType: String
    },
}, {timestamps:true});

const ImageModel = mongoose.model('Image', imageSchema);

module.exports = ImageModel;