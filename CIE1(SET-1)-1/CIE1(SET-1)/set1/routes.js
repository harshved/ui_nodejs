var express = require('express');
const song = require('../model/song');
var router = express.Router();


//to fetch movies
router.get('/songs',async(req,res)=>{
    //missing code
    const Song = await song.find();
    res.send(song);
    console.log(song);
   
})



module.exports = router 