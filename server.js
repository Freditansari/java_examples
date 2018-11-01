var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:2707/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type : String
    },
    completed: {
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

var newTodo = new Todo({text: "cook dinner"});
newTodo.save().then((doc) =>{
    console.log('saved ', doc)

}, (error)=>{
    console.log(error);
});
