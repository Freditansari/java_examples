console.log("starting app.js");

const fs = require('fs');

const yargs = require('yargs');

const _=require('lodash');

const notes = require("./notes.js");
//const argv = yargs.argv
const titleOptions= {
    describe:'title of note', 
    demand: true,
    alias: 't'
};

const bodyOptions =  {
    describe:'body of note', 
    demand: true,
    alias: 'b'
};





const argv = yargs.command('add', 'Add a new note',
{
    title:titleOptions,
    body: bodyOptions
}
)
.command('list', 'list all notes')
.command('read', 'read a note',{
    title:titleOptions
}).command('read', 'read a note',{
    title:titleOptions
    }
)
.help().argv;


var command = process.argv[2];

if(command==='add'){
    
    var note =notes.addNote(argv.title, argv.body);
}else if(command==='list'){
   var allnotes= notes.getAll();
   allnotes.forEach(note => {
       notes.logNote(note);
   });
}else if(command==='read'){
    note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
        
    } else {
        console.log('note not found');
    }
}else if(command==='remove'){
    var noteRemoved= notes.removeNote(argv.title);

    var message = noteRemoved ? 'note was removed' : 'note not found';
    console.log(message);

}else{
    console.log("command not recognized");
}

