const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/user", {useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => console.log("Succesfull Connected..."))
.catch((err) => console.log(err))

//Schema too Create Field
const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        default: Date.now
    }
})

//To Create Collection
const UserList = new mongoose.model("Userlist", userSchema);

//Insert
/*
const createDocument = async() => {
    try {
        const iuser = new UserList({
            fname: "Harsh",
            lname: "Ved",
            mobileNumber: 9409527462,
            emailId: "harshved3@gmail.com",
        })
        const result = await iuser.save();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}
*/

//INsert Many
const createDocument = async() => {
    try {
        const iuser = new UserList({
            fname: "Harsh",
            lname: "Ved",
            mobileNumber: 9409527462,
            emailId: "harshved3@gmail.com",
        });
        const iuser1 = new UserList({
            fname: "Harsh",
            lname: "Bhatt",
            mobileNumber: 8245527462,
            emailId: "harshbhatt12@gmail.com",
        });
        const iuser2 = new UserList({
            fname: "Shrey",
            lname: "Doshi",
            mobileNumber: 7602527462,
            emailId: "sdoshi123@gmail.com",
        });
        const result = await UserList.insertMany([iuser, iuser1, iuser2]);
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}
// createDocument();

//Update
const updateDocument = async (id) => {
    try {
        const result = await UserList.updateOne({_id : id}, {$set : { lname: "DOOSHI"}});
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}
// updateDocument("6211e37e0f77861d4185bbf5");

//Delete
const deleteDocument = async (id) => {
    try {
        // const result = await UserList.findByIdAndDelete({_id : id});
        const result = await UserList.deleteMany();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}
// deleteDocument();


//Select ~ Fetch
const getDocument = async () => {
    try {
        // const result = await UserList.find({fname: "Shrey"});
        const result = await UserList.find();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}
getDocument();