const path= require("path");
const express=require("express");
const Event=require("../models/event.model")
const router=express.Router();
//post the event data
router.post("", async(req, res)=>{
    try {
        const event= await Event.create(req.body);
        return res.status(201).send(event);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get the event data
router.get("", async(req,res)=>{
    try {
        
        const events=await Event.find().lean().exec();
        return res.status(200).send(events); 
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//get a single event data by id
router.get("/:id", async (req, res) => {
    try {
   
        const event = await Event.findById(req.params.id).lean().exec();
  
        return res.status(200).send({ events: event });

    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  //patch the data(means partially upadated not fully)
  router.patch("/:id", async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          })
          .lean()
          .exec();
    
        return res.status(200).send(event);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

  //delete a single event data by its id
  router.delete("/:id", async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id).lean().exec();
    
        return res.status(200).send(event);
      } catch (err) {
        return res.status(500).send(err.message);
      }
  });

module.exports=router;

//handle CRUD operation for event data