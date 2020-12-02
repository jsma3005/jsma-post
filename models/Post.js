const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg'
    },
    date: {
        type: Date,
        default: Date().toLocaleString()
    }
})

module.exports = mongoose.model('Posts', PostSchema);