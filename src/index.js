const express=require("express");
const {register, login}=require("./controllers/user.controller");
const eventController=require("./controllers/event.controller");

const app=express();
app.use(express.json());
app.post("/register", register); 
app.post("/login", login);
app.use("/", eventController);

module.exports=app; 