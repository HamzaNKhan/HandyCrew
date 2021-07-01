const express = require("express");
const Router = express.Router();

let Location = require("../model/user_location");


Router.route('/add/:userID').post((req,res)=>{
    new Location({
        userId : req.params.userID,
        cityName : req.body.cityName  
        // sector : req.body.sector,
        // streetNo : req.body.streetNo,
        // houseNo : req.body.houseNo
    })
    .save()
    .then((location)=>res.send(location))
    .catch(err=>console.log(err));
})

Router.route('/get/:id').get((req,res)=>{
    Location.find({userId : req.params.id})
    .then(location => res.send(location))
    .catch(err=>console.log(err));
});
module.exports = Router;