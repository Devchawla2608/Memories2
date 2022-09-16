// **********Imported All these things ***********
const express = require('express');


// **********Body Parser is middleware .It recieves requests ***********
const bodyParser = require('body-parser');


// **********Importing Mongoose ***********
const mongoose = require('mongoose');
// Which helpd us to connect database 



// **********Importing cors ***********
// Cross-Origin Resource Sharing . It allows us to relax the security applied to an API.
// const cors = require('cors');



// ********** Initialize App ***********
const app = express();


// ********** For Api call ***********
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


// ********** Using Cors ***********
// app.use(cors());


// ********** Connecting DataBase ***********
const db = require('./config/mongoose')

// **********Defining Port ***********
const port =  5000;

// ********** Using Routes ***********
app.use('/' , require('./routes'));

app.listen(port , function(err){
    if(err){
        console.log("There is an error" , err);
    }
    console.log("Your server is running on port",port);
})


// How Promises Work 