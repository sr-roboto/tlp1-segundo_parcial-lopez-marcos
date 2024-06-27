const { Router } = require('express');
const router = Router();
const {ctrl} = require('../controllers/books.controllers');

//<-- CRUD -->
router.post('/create', ctrl.crearLibro);

router.get('/read', ctrl.obtenerLibros);

router.get('/read/:id', ctrl.obtenerLibro);

router.put('/update/:id', ctrl.editarLibro);

router.delete('/delete/:id', ctrl.eliminarLibro);

module.exports = router; 