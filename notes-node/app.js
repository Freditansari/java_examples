console.log("starting app");

const fs = require('fs');
const os = require ('os'); 
const notes = require('./notes.js');

var user = os.userInfo();

fs.appendFile('greetings.txt','HELLO '+ user.username+" you are : "+ notes.age);