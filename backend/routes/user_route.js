const express = require('express');
const Router = express.Router();

let User = require('../model/user');


Router.route('/all').get((req,res)=>{
    User.find()
            .then((users)=>res.send(users))
            .catch((err)=>console.log(err));
});

Router.route('/:id/').get((req,res)=>{
    let id = req.params.id;
    User.find({_id:id})
            .then((user)=>res.send(user))
            .catch((err)=>console.log(err));
});

Router.route('/').get((req,res)=>{
    User.find()
            .then((users)=>{
                users.sort((a,b)=>b.memberSince - a.memberSince);
                users = [users[0], users[1], users[2]]
                res.send(users);
            })
            .catch((err)=>console.log(err));
});



Router.route('/add').post((req,res)=>{(
    new User({'cellNo': req.body.cellNo,
             'firstName': req.body.firstName,
             'lastName': req.body.lastName,
             'password' : req.body.password,
             'email' : req.body.email,
             'experience': req.body.experience,
             'gender':req.body.gender,
             'dob': req.body.dob,
             'memberSince': new Date()
            }))
            .save((err,list)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(list);
                }
            })
});

//Send complete object to update
Router.route('/update/:id').patch((req,res)=>{
        User.findByIdAndUpdate({'_id':req.params.id},{$set: req.body})
        .then((user)=>res.send(user))
        .catch(err=>console.log(err));
});

Router.route('/delete/:id').delete((req,res)=>{
    User.findByIdAndRemove({_id:req.params.id})
        .then(user=>res.send(user))
        .catch(err=>console.log(err));

});

module.exports = Router;