const express = require("express");
const router = new express.Router();
const Student = require("../models/students")

// 2: we need to define the router

//create a new students
//same above thing but use with async await way
//posting POST method
router.post("/students", async (req, res) =>{

    try {

        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)
        
    } catch (error) {
        res.status(400).send(error)        
    }

})

//getting GET method
router.get("/students", async (req, res) =>{

    console.log("==>",Student.find());
    try {

        const StudentData = await Student.find();
        res.send(StudentData)

        
    } catch (error) {
        res.send(error)        
    }

})

//getting GET method of single student
router.get("/students/:id", async (req, res) =>{

    try {
        
        const _id = req.params.id;
        const studentData = await Student.findById(_id)
        res.send(studentData)
        
    } catch (error) {
        res.send(error)        
    }

})


//Deleting DELETE method of single student
router.delete("/students/:id", async (req, res) =>{

    try {
        
        const deletestudentData = await Student.findByIdAndDelete(req.params.id)
        if (!req.params.id) {
            return res.status(400).send();   
        }
        res.send(deletestudentData)
        
    } catch (error) {
        res.send(error)        
    }

})


//Updating UPDATE method of single student
router.patch("/students/:id", async (req, res) =>{
    try {
        const _id = req.params.id;
        const updateStudentData = await Student.findByIdAndUpdate(_id, req.body,{
            new: true
        })
        res.send(updateStudentData)
        
    } catch (error) {
        res.status(400).send(error)        
    }

})

module.exports = router;