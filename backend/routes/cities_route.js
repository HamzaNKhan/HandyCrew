const express = require('express');
const Router = express.Router();

let Cities = require('../model/Cities');


Router.route('/add').post((req,res)=>{
    new Cities({
        cityName : req.body.cityName
    })
    .save()
    .then((cities)=>res.send(cities))
    .catch(err=>console.log(err));
})



Router.route('/all').get((req,res)=>{
    Cities.find()
    .then(cities => res.send(cities))
    .catch(err=>console.log(err));
});


module.exports = Router;