const express = require('express');
const Router = express.Router();

let Skill = require('../model/user_skills');


Router.route('/add/:id').post((req,res)=>{
    new Skill({
        userId: req.params.id,
        skillType: req.body.skillName,
        skillDescription: req.body.skillDescription,
        charges : req.body.charges,
        skillID: req.body.skillID
    })
    .save()
    .then(skill=>res.send(skill))
    .catch(err=>console.log(err));
})

Router.route('/:id').get((req,res)=>{
    Skill.find({userId:req.params.id})
        .then(skill=>res.send(skill))
        .catch(err=>console.log(err));
})

Router.route('/update/:userID/:skillID').patch((req,res)=>{
    Skill.findOneAndUpdate({_id:req.params.skillID, userId: req.params.userID},{$set: req.body})
        .then(skill=>res.send(skill))
        .catch(err=>console.log(err));
})

Router.route('/delete/:userID/:skillID').delete((req,res)=>{
    Skill.findOneAndDelete({_id:req.params.skillID, user_id: req.params.userID})
        .then(skill=>res.send(skill))
        .catch(err=>console.log(err));
});

Router.route('/get/:skillID').get((req,res) => {
    Skill.find({skillID:req.params.skillID})
        .then(skill=>res.send(skill))
        .catch(err=>console.log(err)
        );
})




module.exports = Router;