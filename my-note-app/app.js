const notes = require('./notes.js');
const yargs = require('yargs');

// console.log(process.argv);
yargs.command({
    command: 'add',
    describe: 'adding a new note!',
    builder: {
        title: {
            describe: 'This is the title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'This is the body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'removing a note!',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'listing all the notes',
    handler(){
        notes.listAllNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse();
// console.log(yargs.argv);

