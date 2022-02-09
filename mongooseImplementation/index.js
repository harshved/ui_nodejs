const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/user", {useNewUrlParser: true, useUnifiedTopology} )
.then(() => console.log("Succesfull Connected..."))
.catch((err) => console.log(err))