const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    branch:String,
    phone:Number
});


module.exports = mongoose.model("Student",schema);