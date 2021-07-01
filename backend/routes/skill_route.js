const express = require("express");
const Router = express.Router();

let Skill = require("../model/skills");


Router.route('/add').post((req,res)=>{
    new Skill({
        skillName : req.body.skillName
    })
    .save()
    .then((skill)=>res.send(skill))
    .catch(err=>console.log(err));
})

Router.route('/all').get((req,res)=>{
    Skill.find()
    .then(skill => res.send(skill))
    .catch(err=>console.log(err));
});

Router.route('/:skillName').get((req,res)=>{
    Skill.find({skillName: req.params.skillName})
    .then(skill => res.send(skill))
    .catch(err=>console.log(err));
});


module.exports = Router;