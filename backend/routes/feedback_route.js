const express = require("express");
const Router = express.Router();
let Feedback = require("../model/user_feedback");


// Router.route("/add/:id").post((req, res) => {
//     Feedback.findOneAndUpdate(
//       { user_id: req.params.id },
//       { $inc : {feedbackCount : 1}, stars: req.body.star, comment: req.body.comment }
      
//     )
//       .then((feedback) => res.send(feedback))
//       .catch((err) => console.log(err));
//   });


Router.route("/add/:userid").post((req,res)=>{
    new Feedback({
      user_id: req.params.userid,
      stars: req.body.stars,
      comment: req.body.comment
    })
    .save()
    .then(feed=>res.send(feed))
    .catch(err=>console.log(err));
})

Router.route("/:id").get((req,res)=>{
  Feedback.find({user_id : req.params.id})
    .then(Feedback => res.send(Feedback))
    .catch(err=>console.log(err));
})


Router.route("/").get((req,res)=>{
  Feedback.find()
    .then((feed) => {

      feed.sort(function(a, b) {
        return parseFloat(b.stars) - parseFloat(a.stars);
      });
      feed = [feed[0], feed[1], feed[2]]
      res.send(feed)
    })
    .catch(err=>console.log(err));
})



module.exports = Router;