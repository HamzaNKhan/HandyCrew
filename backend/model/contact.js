const mongoose = require('mongoose');

const schema = mongoose.Schema;

let Contact = new schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    }

});

const contact = mongoose.model('Contact', Contact);
module.exports = contact;