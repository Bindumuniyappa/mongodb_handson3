const Information=require("../models/student.js")

const findInDB = async (req, res) => {
    try {
        const dbResponse = await Information.find({});
        console.log("Data is fetched =>", dbResponse)
        return res.status(200).send({message: dbResponse})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const findsalaryDB = async (req, res) => {
    const query = {salary: { $gt : "30000" }};
    try {
        const result = await Information.find(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}


const findExperienceInDB = async (req, res) => {
    const query = {overallExp : { $gt : "2" }};
    try {
        const result = await Information.find(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const findExperienceAndGraduateInDB = async (req, res) => {
    const query = {$and: [{ yearGrad : { $gt : "2015" }},{ overallExp : { $gt : "1" }}]};
    try {
        const result = await Information.find(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const updateSalaryInDB = async (req, res) => {
    const updateData = req.body;
    const filter = updateData.filter;
    const value = {$set: updateData.value}
    try {
        const result = await Information.updateMany(filter, value);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const studentDelete = async (req, res) => {
    const query = { lastCompany: "Y" } ;
    try {
        const result = await Information.deleteMany(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports = {
    findInDB, 
    findsalaryDB, 
    findExperienceInDB, 
    findExperienceAndGraduateInDB,
    updateSalaryInDB,
    studentDelete
}



// const Information=require("../models/student.js")

// const studentEnrollment=async (req,res)=>{
// // const studentData=req.body;
// try{
// const information=new Information({
//     firstName:studentData.firstName,
//     lastName:studentData.lastName,
//     salary:studentData.salary,
//     department:studentData.department,
//     lastComapny:studentData.lastComapany,
//     lastSalary:studentData.lastSalary,
//     overallExp:studentData.overallExp,
//     contactInfo:studentData.contactInfo,
//     yearGrad:studentData.yearGrad,
//     gradStream:studentData.gradStream
// });
// console.log(information)
// const validateResult=studentEnrollment.validatesync();
// console.log(validateResult);
// const dbResponse=await information.save();
// console.log("Data is saved=>" ,dbResponse)
// return res.status(200).send({message:"student info is saved"})
// }
// catch(error){
// console.log("Error while operating on db=>",error.message);
// return res.status(500).send({message:"Error while operating on db"})
// }
// }


// const studentFind=async (req,res)=>{
//     // const queryParams=req.query;
//     // console.log(queryParams)
//     // const query={"firstName":queryParams.firstName}
//     try{
//         const result=await information.find({});
//         console.log("The result of database operation =>",result)
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("Something went wrong while performing db operation");
//         return res.status(500).send({message:"Something went wrong while performing the operation"})
//     }
// }

// const studentFindExp=async (req,res)=>{
//     const queryParams=req.query;
//     console.log(queryParams)
//     const query={"overallExp":{$gt:"2"}}
//     try{
//        const result=await  information.find(query);
//        console.log(result);
//      return res.status(200).send({message:"here is the data=>"})
       
//     }
//     catch(error){
//         console.log("Something went wrong while performing db operation" ,error);
//         return res.status(500).send({message:"Something went wrong while performing the operation"})
//     }
// }

// const studentFindExpAndGrad=async (req,res)=>{
//     const queryParams=req.query;
//     console.log(queryParams)
//     const query={"yearGrad":{$gt:"2015"} && {"overallExp":{$gt:"2"}} }
//     try{
//        const result=await  information.find(query);
//        console.log(result);
//      return res.status(200).send({message:"here is the data=>"})
       
//     }
//     catch(error){
//         console.log("Something went wrong while performing db operation" ,error);
//         return res.status(500).send({message:"Something went wrong while performing the operation"})
//     }
// }

// const studentUpdate = async (req, res) => {
//     const updateData = req.body;
//     const filter = updateData.filter;
//     const value = {$set: updateData.value}
//     console.log(filter);
//     console.log(value);
//     try {
//         const result = await information.updateMany(filter, value);
//         console.log("The result of databse operation =>", result);
//         return res.status(200).send(result);
//     } catch(error) {
//         console.log("Something went wrong while performing db opeartion");
//         return res.status(500).send({message: "Something went wrong while performing the operation"})
//     }
// }


// const studentDelete = async (req, res) => {
//     const condition = req.query;
//     console.log(condition);
//     try {
//         const result = await information.delete(condition);
//         console.log("The result of databse operation =>", result);
//         return res.status(200).send(result);
//     } catch(error) {
//         console.log("Something went wrong while performing db opeartion");
//         return res.status(500).send({message: "Something went wrong while performing the operation"})
//     }
// }


// module.exports={
//     studentEnrollment,studentFind,studentFindExp,studentUpdate,studentFindExpAndGrad,studentDelete
// }
