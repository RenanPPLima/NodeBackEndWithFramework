const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String, // image will be URL
        required: true
    },
},
    {timestamps: true},
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};
