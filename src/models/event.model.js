const mongoose=require("mongoose");
const eventSchema=new mongoose.Schema(
    {
        event_name: { type: String, require: true },
        event_address: { type: String, require: true },
                city: { type: String, require: true },
            state_name: { type: String, require: true },
          start_date: { type: String, require: true },
         end_date: { type: String, require: true },
         event_rating: { type: Number, require: true },
         description: { type: String, require: true },
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
module.exports= mongoose.model("event", eventSchema);

//events Schema (means here you can make what type of data you want to add to your event)
