const express = require("express");
const router = express();
const bodyPharser = require("body-parser");

router.use(bodyPharser.json());

//load mongoose
const mongoose = require("mongoose");

require("./FAQ")
const FAQ = mongoose.model("FAQ");

mongoose.connect("mongodb+srv://Deshani:123456789abc@reviews.6ttko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", ()=>{
    console.log("Databse is connected");
});

router.post('/addfaq', (req,res)=>{
    const { 
        product_id,
        user_id,
        question
       } = req.body;
    
     
    var newFaq = new FAQ({
        product_id,
        user_id,
        question
       
    });
  
    newFaq
      .save()
      .then(() => {
        res.json("Question added successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  
});

router.get("/faqlist", (req, res) => {
    FAQ.find()
      .then((FAQ) => {
        res.json(FAQ);
      })
      .catch((err) => {
        console.log(err);
      });
  });

router.get("/get/:id", (req, res) => {
    let faqid = req.params.id; 
    FAQ.findById(faqid)
      .then((FAQ) => {
        res.json(FAQ);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.put("/updatefaq/:id", (req, res) => {
    let id = req.params.id;
    const { 
        product_id,
        user_id,
        question
     } = req.body;
  
    const faqUpdate = {
        product_id,
        user_id,
        question
      
    };

    FAQ.findByIdAndUpdate(id, faqUpdate)
    .then(() => {
      res.status(200).send({ status: "FAQ is updated successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
});

router.delete("/deletefaq/:id",(req, res) => {
    let id = req.params.id;
  
    FAQ.findByIdAndDelete(id)
      .then(() => {
        res.status(200).send({ status: "FAQ Deleted!" });
      })
      .catch((err) => {
        res.status(500).send({ status: "Error! Cannot Delete!" });
        console.log(err.message);
      });
  } );





router.listen(4545,()=>{
    console.log("up and running!");
})





