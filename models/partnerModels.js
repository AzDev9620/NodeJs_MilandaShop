const mongoose = require('mongoose')

const partnerSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    offer: {
        type: String,
        required: true,
        trim: true,
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Partner", partnerSchema)