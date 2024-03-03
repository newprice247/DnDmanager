const mongoose = require('mongoose');

mongoose
    .connect(
        process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dndManager',
    )
    .then(() => {
        console.log('Connected to MongoDb Atlas!');

    })
    .catch(() => {
        console.log('Connection to MongoDb Atlas Failed');
        console.log(error);
    })

module.exports = mongoose.connection;
