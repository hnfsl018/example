const express = require('express')
const mongoose = require('mongoose')
const indexRoute = require('./route/index')

const app = express()
app.use(express.json())
const uri = 'mongodb://localhost:27017/restaurant'
mongoose.connect(uri, { useNewUrlParser: true })
const db = mongoose.connection;

db.on('connected', function(){
    console.log('Mongoose connected');
    });    

db.on('error', function(err){
    console.log('Mongoose error: ' + err);
    });




app.use('/' ,indexRoute )
app.listen(3000, ()=>{
    console.log('App start at http://localhost:3000')
})
module.exports = app