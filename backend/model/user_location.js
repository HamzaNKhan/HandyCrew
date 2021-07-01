const mongoose = require('mongoose');

const schema = mongoose.Schema;

let Location = new schema({
    userId:{
        type:mongoose.Types.ObjectId
    },
    cityName:{
        type:String,
        required:false
    },
    sector:{
        type:String
    },
    streetNo:{
        type:String
    },
    houseNo:{
        type:String
    }
})

const location = mongoose.model('Location', Location);
module.exports = location;