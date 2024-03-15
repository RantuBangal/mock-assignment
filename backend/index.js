const express = require('express');
const PORT = 6500;
const { db } = require('./config/db');
const { reciepeTable } = require('./models/reciepe.model');
const cors = require('cors');
const { reciepeRouter } = require('./routes/reciepe.route');


//initialise the app
const app = express();


//middlewares
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use('/reciepes', reciepeTable, reciepeRouter);


//homepage
app.get('/', (req,res) => {
    res.status(200).json({msg: "Welcome to the backend of Reciepe App"})
});


//listening to the port
app.listen(PORT, () => {
    try{
        db.connect((err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Connected to DB");
            }
        })
        console.log("Server sunning in port",PORT);
    }
    catch(err){
        console.log("Error while connecting to DB");
    }
})