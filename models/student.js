const mongoose=require("mongoose");

const informationSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    salary:String,
    department:String,
    lastCompany:String,
    lastSalary:String,
    overallExp:String,
    contactInfo:String,
    yearGrad:String,
    gradStream:String

});

const Information=mongoose.model("information",informationSchema);//within quotes is collection name


module.exports=Information;