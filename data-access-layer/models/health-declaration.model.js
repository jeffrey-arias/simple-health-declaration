const mongoose = require('mongoose');
const schema = mongoose.Schema;

const healthDeclarationSchema = new schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    temperature: {
        type: Number,
        required: true,
        trim: true
    },
    attestation: {
        type: Boolean,
        required: true,
        trim: true
    }

}, {
    timestamps: true
});

const healthDeclaration = mongoose.model("health-declaration", healthDeclarationSchema);

module.exports = healthDeclaration;