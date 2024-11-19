const mongoose = require('mongoose')

const TenderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            Required: true,
        },
        description: {
            type: String,
            Required: true,
        },
        starttime: { type: Date, required: true },
        endtime: { type: Date, required: true },
        Buffertime: { type: Number, default: 0 },
    },{ timestamps: true }
)
const TenderModel = mongoose.model('tenders',TenderSchema)
module.exports = TenderModel;