const mongoose = require('mongoose');
const{Schema} = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    
},
{
    timestamps: true,
    versionkey: false,
}
);

module.exports = mongoose.model('Category', categorySchema);