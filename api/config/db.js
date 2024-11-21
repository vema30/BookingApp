const mongoose=require("mongoose");

 const DbConnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/bookingapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB successfully!");
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
      });
      
 }
 module.exports=DbConnect;