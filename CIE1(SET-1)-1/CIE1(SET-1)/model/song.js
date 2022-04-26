var mongoose = require('mongoose');


var songSchema = mongoose.Schema({
    name:string,
    singer:string
})


module.exports=mongoose.model('songs',songSchema); 