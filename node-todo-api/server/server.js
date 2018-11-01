/**
 * https://mongoosejs.com/docs/validation.html
 * 
 * https://mongoosejs.com/docs/guide.html
 */
var express = require('express');
var bodyParser = require('body-parser');

var {Mongoose} = require('./db/mongoose');
var {Todo} = require('./db/models/todo');
var {User} = require('./db/models/user');

var app=express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    //this line is to check request made body  => console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);

    }, (error)=>{
        res.status(400).send(error);

    });
});

app.get('/todos',(req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000, ()=>{
    console.log('server is started');
});

//testing purposes
module.exports={app};

