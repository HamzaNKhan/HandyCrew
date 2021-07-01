const mongoose = require('mongoose');

const schema = mongoose.Schema;

let Cities = new schema({
    cityName:{
        type:String
    }

});

const cities = mongoose.model('Cities', Cities);
module.exports = cities;