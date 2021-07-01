const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://HamzaNK:bunnyy@cluster0-7srqv.mongodb.net/HandyCrew?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        .then(()=>console.log("Database Connected"))
        .catch((err)=>console.log(err));

module.exports = mongoose;