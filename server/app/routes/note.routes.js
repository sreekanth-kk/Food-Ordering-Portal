module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/shopping/add', notes.create);

    // Retrieve all Notes
    app.get('/shopping/getAll', notes.findAll);
    app.get('/shopping/getCart', notes.findCart);


    // Delete a Note with noteId
    app.delete('/shopping/delete', notes.delete);
    app.delete('/shopping/deleteAll', notes.deleteAll);
}