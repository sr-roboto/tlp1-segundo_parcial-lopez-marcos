const { db } = require('../db/database');
const ctrl = {};

ctrl.obtenerLibros = (req, res) => {
    res.json(db)
}

ctrl.obtenerLibro = (req, res) => {
    const id = parseInt(req.params.id);
    db.forEach((book) => {
        if (book.id === id) {
            res.json(book)
        }
    });
};

ctrl.crearLibro = (req, res) => {
    const { title, author, year } = req.body;
    const id = db.length + 1;
    db.push({ id, title, author, year })
    res.json({ "msg": "Libro creado con exito" });
};

ctrl.editarLibro = (req, res) => {
    const id = parseInt(req.params.id)
    const { title, author, year } = req.body
    db.forEach((user) => {
        if (user.id === id) {
            user.title = title;
            user.author = author;
            user.year = year;
        }
    });
    res.json({ "msg": "libro editado correctamente" });
};

ctrl.eliminarLibro = (req, res) => {
    const id = parseInt(req.params.id)
    db.forEach((book, index) => {
        if (book.id === id) {
            db.splice(index, 1)
        }
    });
    res.json({ "msg": "Libro eliminado correctamente" });
};

module.exports = {
    ctrl
};