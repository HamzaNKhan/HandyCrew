const mongoose = require('mongoose');

const schema = mongoose.Schema;

let userSkills = new schema({
    userId:{
        type:mongoose.Types.ObjectId
    },
    skillID:{
        type:mongoose.Types.ObjectId
    },
    skillType:{
        type:String
    },
    skillDescription:{
        type:String
    },
    charges:{
        type:String
    }
})

const Uskills = mongoose.model('userSkills', userSkills);
module.exports = Uskills;