const { json } = require('body-parser');
const { db } = require('../db/database');
const ctrl = {};

ctrl.obtenerLibros = (req, res) => {
    res.json(db)
}

ctrl.obtenerLibro = (req, res) => {
    const id = parseInt(req.params.id);
    db.forEach(user => {
        if (user.id === id) {
            res.json(user)
        } else {
            res.json({ "msg": "¡este libro no existe!" })
        }
    });
}

ctrl.crearLibro = (req, res) => {
    const { title, author, year } = req.body;
    const id = db.length + 1;
    db.forEach((book) => {
        if (book.title !== title) {
            db.push({ id, title, author, year })
        } else {
            res.json({ "msg": "¡El libro ya existe!" })
        }
    })

    res.json({ "msg": "usuario creado con exito" })
}

ctrl.editarLibro = (req, res) => {
    const id = parseInt(req.params.id)
    const { title, author, year } = req.body
    db.forEach(user => {
        if (user.id === id) {
            user.title = title
            user.author = author
            user.year = year
        } else {
            res.json({ "msg": "¡estas tratando de editar un libro que no existe!" })
        }
    });
    res.json({ "msg": "libro editado correctamente" })
}

ctrl.eliminarLIbro = (req, res) => {
    const id = parseInt(req.params.id)
    db.forEach((book, index) => {
        if (book.id === id) {
            db.splice(index, 1)
        } else {
            res.json({ "msg": "¡estas tratando de eliminar un libro que no existe!" })
        }
    })
    res.json({ "msg": "usuario eliminado correctamente" })
}

module.exports = {
    ctrl
}