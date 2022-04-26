const express = require('express');
const mongoose = require("mongoose");
const students = require('./models/students');
const port = process.env.PORT || 3000;

mongoose
.connect("mongodb://localhost:27017/students-api", { useNewUrlParser: true,useUnifiedTopology: true })
.then(() => {
    const app = express()
    app.use(express.json());
    // app.use("/api", routes) // new

    //Create User
    app.post('/students', async(req,res) => {
        try{
            const stud = new students(req.body);
            const createUser = await stud.save();
            res.send(stud);
        }catch(e){
            res.send(e);
        }
    })

    //Read User
    app.get('/students', async(req, res) => {
        try{
            const studData = await students.find()
            res.send(studData)
        }catch(e){
            res.send(e);
        }
    })
    //Read User by id
    app.get('/students/:id', async(req, res) => {
        try{
            const id = req.params.id;
            const studData = await students.findById(id)
            res.send(studData)
        }catch(e){
            res.send(e);
        }
    })

    //Delete User
    app.delete('/students/:id', async(req,res) => {
        try{
            const id = req.params.id;
            const delStudent = await students.findByIdAndDelete(id)
            res.send(delStudent)
            console.log(delStudent)
        }catch(e){
            res.send(e);
        }
    })

    //Update User
    app.patch('/students/:id', async(req,res) => {
        try{
            const id = req.params.id;
            const updateStudent = await students.findByIdAndUpdate(id, req.body, {new: true})
            res.send(updateStudent)
            console.log(updateStudent)
        }catch(e){
            res.send(e);
        }
    })


    app.listen(port, () => {
        console.log("Server has started!")
    })
})