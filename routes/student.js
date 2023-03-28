const express=require("express")
const studentController=require("../controllers/student")

const router=express.Router();

router.get('/student',studentController.findInDB);
router.get('/student',studentController.findsalaryDB);
router.get('/student', studentController.findExperienceInDB);
router.get('/student', studentController.findExperienceAndGraduateInDB);
router.put('/student', studentController.updateSalaryInDB);
router.delete('/student', studentController.studentDelete);

module.exports=router