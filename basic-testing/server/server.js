/**
 * user supertest in order to test express server 
 * use npm install supertest --save-dev
 */
const express = require('express');
var app=express();
/**
 * basic 200 response with hello world
 */
// app.get('/',(req,res)=>{
//     res.status(200).send('hello world');
// });

/**
 * mocha testing framework can also do this 
 */
app.get('/',(req,res)=>{
    res.status(404).send({
        error:'page not found',
        applicationName:'todo App'
});
});

app.get('/users',(req,res)=>{
    res.status(200).send(
        [{
        name:'jono',
        age:25
        },
        {
        name: 'jimmy',
        age:35
        },
        {
        name: 'sanjay',
        age: 45    
        }]);
});

app.listen(3000);

module.exports.app=app;