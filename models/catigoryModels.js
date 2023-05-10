const mongoose = require('mongoose')

const catigorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    images: {
        type: Object,
        required: true
    },

    
    nameUz: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Category", catigorySchema)