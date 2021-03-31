
const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {


    // Create a Note
    const note = new Note({
        name: req.body.name || "UngroceryItemd Note",
        image: req.body.image,
        price: req.body.price,
        description: req.body.description
    });

    // Save Note in the database
    note.save()
        .then(data => {
            res.send({ "result": "success" });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
        .then(notes => {
            res.send([
                {
                    "name": "Pizza",
                    "image": "https://res.cloudinary.com/skk/image/upload/v1616303138/Pizza_nlosvv.png",
                    "subItemsData": {
                        "name": "Tasty Pizzas",
                        "subItems": [
                            {
                                "name": "Tomato Basil Italian Pizza",
                                "image": "https://res.cloudinary.com/skk/image/upload/v1616303149/tomato-pizza_ft35vm.jpg",
                                "price": "450",
                                "description": "Dressed with oil, the origanum and garlic cloves"
                            },
                            {
                                "name": "Bombay Pizza",
                                "image": "https://res.cloudinary.com/skk/image/upload/v1616303149/bombay-pizza_tiwrwd.jpg",
                                "price": "550",
                                "description": "Spicy tomato sauce with Italian herbs, mushrooms,onion, cottage cheese, coriander and mozzarella"
                            },
                            {
                                "name": "Sicilia Pizza",
                                "image": "https://res.cloudinary.com/skk/image/upload/v1616303146/cheese-pizza_u53la4.jpg",
                                "price": "450",
                                "description": "A thick base pizza with fresh tomato sauce,mushrooms, garlic, pickled onions"
                            }
                        ]
                    }
                },
                {
                    "name": "Burger",
                    "image": "https://res.cloudinary.com/skk/image/upload/v1616303135/buger_t2waau.png",
                    "subItemsData": {
                        "name": "Crispy Burgers",
                        "subItems": [
                            {
                                "name": "Fried Chicken Burger",
                                "image": "https://res.cloudinary.com/skk/image/upload/v1616303141/cheese-burger_xcc0ap.jpg",
                                "price": "450",
                                "description": "Old School Chicken Burger"
                            },
                            {
                                "name": "Paneer Tikka Burger",
                                "image": "https://res.cloudinary.com/skk/image/upload/v1616303148/tomato-burger_oef6sy.jpg",
                                "price": "450",
                                "description": "Spicy Paneer, Onion, Tomato, Mozerella Cheese"
                            },
                            {
                                "name": "Chicken Classic Cheese Burger",
                                "image": "https://res.cloudinary.com/skk/image/upload/v1616303142/bombay-burger_ohrwiv.jpg",
                                "price": "550",
                                "description": "Aged cheddar, sweet pickle, tomato, red onion"
                            }
                        ]
                    }
                }
            ]);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};

exports.findCart = (req, res) => {
    Note.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};


// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.body._id)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });
            }
            res.send({ "result": "success" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.body._id
            });
        });

};

exports.deleteAll = (req, res) => {
    Note.deleteMany()
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });
            }
            res.send({ "result": "success" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.body._id
            });
        });

};