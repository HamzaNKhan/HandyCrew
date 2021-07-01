const mongoose = require('mongoose');

const schema = mongoose.Schema;

let Feedback = new schema({
    user_id:{
        type: mongoose.Types.ObjectId
    },
    stars:{
        type:Number
    },
    comment:{
        type : String
    }

});

const feedback = mongoose.model('Feedback', Feedback);
module.exports = feedback;