// This file for DB Connection 
const mongoose = require('mongoose')
 async function getDataBase(){
    mongoose.connect('mongodb://127.0.0.1:27017/library')
    .then(()=>{
        console.log('DataBase Is Connected');
    })
    .catch((e)=>{
        console.log("DataBase Connection Error", e.name)
    })
 }

 module.exports = {
    getDataBase
 }