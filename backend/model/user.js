const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const schema = mongoose.Schema;

let User = new schema({
            cellNo:{
                type:String,
                required: false
            },
            firstName:{
                type:String,
                required: false
            },
            lastName:{
                type:String,
                required: false
            },
            password:{
                type:String,
                required: false
            },
            email:{
                type:String,
                required: false
            },
            experience:{
                type:Number
            },
            memberSince:{
                type: Date
            },
            gender: {
                type:String
            },
            dob:{
                    type: Date
                }
          })

    User.pre('save', function(next){
        var ref = this;
        bcrypt.hash(ref.password, null, null, function(err,hash){
            if(err){
                return next(err);
            }
            ref.password = hash;
            next();
        })
    })

const user = mongoose.model('User', User);
module.exports = user;