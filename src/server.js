const app=require("./index");
const connect=require("./configs/db");

app.listen(process.env.PORT || 2345, async()=>{
    try {
        await connect();
        console.log("Listening on port 2345.");
    } catch (error) {
        console.log(error);
    }
});