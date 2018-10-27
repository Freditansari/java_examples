const fs = require('fs');

var fetchNotes =()=>{
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(noteString);
        
    } catch (error) {
        console.log(error);
        return [];
    }

};

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) =>{
    var notes =fetchNotes();
    var note = {title , body};

    var duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });

    if (duplicateNotes.length ===0){
        notes.push(note);
        saveNotes(notes);
        console.log('note added ' + JSON.parse(JSON.stringify(note)).title);
        return note;
    }else {
        console.log ('duplicate title found');
        return "duplicate title found";
    }

   

};

var getAll = ()=>{
    var allNotes = fetchNotes();
    return allNotes;
};

var getNote =(title) =>{
    var allNotes = fetchNotes();
    var searchedNotes = allNotes.filter((note)=> note.title === title);
    return searchedNotes[0];

};

var removeNote =(title) =>{
  var notes = fetchNotes();
  var filteredNOtes = notes.filter((note) =>note.title !==title);
  saveNotes(filteredNOtes);
  return notes.length !== filteredNOtes.length;
};

var logNote = (note) =>{
    debugger
    console.log('--------')
    console.log('title: '+ note.title);
    console.log('body: '+ note.body);
}
module.exports={
    addNote,
    getAll,
    logNote,
    getNote,
    removeNote
};