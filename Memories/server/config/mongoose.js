const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/instagram_db')
const db = mongoose.connection;
db.on('error' , console.error.bind(console , 'error connected to the database'));
db.once('open' , function(){
    console.log("Successfully connected to the database")
}) 