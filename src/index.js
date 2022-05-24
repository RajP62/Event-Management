const express=require("express");
const {register, login}=require("./controllers/user.controller");
const eventController=require("./controllers/event.controller");
const cors = require("cors");

const app=express();
app.use(cors);
app.use(express.json());
app.post("/register", register); 
app.post("/login", login);
app.use("/events", eventController);

module.exports=app; 