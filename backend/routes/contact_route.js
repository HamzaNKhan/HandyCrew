const express = require("express");
const Router = express.Router();

let Contact = require("../model/contact");


Router.route('/add/').post((req,res)=>{
    new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        
    })
    .save()
    .then((contact)=>res.send(contact))
    .catch(err=>console.log(err));
})

Router.route("/all").get((req,res)=>{
    Contact.find()
      .then(Contact => res.send(Contact))
      .catch(err=>console.log(err));
  })

module.exports = Router;