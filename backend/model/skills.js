const mongoose = require('mongoose');

const schema = mongoose.Schema;

let Skills = new schema({
    skillName:{
        type:String,
        unique:true
    }

});

const skill = mongoose.model('Skills', Skills);
module.exports = skill;