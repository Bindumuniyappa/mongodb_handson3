const mongoose=require('mongoose')

const url="mongodb+srv://muniyappabindu7:Bindu123@cluster0.a9kds6z.mongodb.net/?retryWrites=true&w=majority";

const connect=async()=>{
    try{
        console.log("connecting to mongodb...!!")
        const dbConn=await mongoose.connect(url);
        console.log("connected=>")
    }
    catch(error){
        console.log("error in connecting db");

    }

}


module.exports=connect;