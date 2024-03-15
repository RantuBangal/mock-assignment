const mysql = require('mysql');
const { db } = require('../config/db');

const reciepeTable = (req,res,next) => {
    const query = `CREATE TABLE IF NOT EXISTS reciepes (
        idMeal VARCHAR(255) NOT NULL,
        strMealThumb VARCHAR(255) NOT NULL,
        strMeal VARCHAR(255) NOT NULL,
        strCategory VARCHAR(255) NOT NULL,
        strArea VARCHAR(255) NOT NULL
    )`

    db.query(query, [], (err,result) => {
        if(err){
            console.log(err);
            console.log("Error from model");
        } else{
            console.log("Successfully created model");
            next()
        }
    })
}

module.exports = {
    reciepeTable
}