const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('Note successfully added!'));
        saveNotes(notes);
    } else {
        console.log(chalk.red.inverse('Title already exist'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const noteToKeep = notes.filter((note) => note.title !== title)

    if(notes.length===noteToKeep.length){
        console.log(chalk.red.inverse('Note not found!'))
    } else {
        console.log(chalk.green.inverse('Note deleted successfully!'))
    }
    saveNotes(noteToKeep);
}

const listAllNotes = () => {
    console.log(chalk.blue.inverse('Your notes are ... '))
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title)

    if(noteToRead){
        console.log(chalk.green.inverse(noteToRead.title))
        console.log(chalk.yellow(noteToRead.body))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('jsonfile.json',dataJSON);
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('jsonfile.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listAllNotes: listAllNotes,
    readNote: readNote
}