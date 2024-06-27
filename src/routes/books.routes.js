const { Router } = require('express');
const router = Router();
const {ctrl} = require('../controllers/books.controllers');

//<-- CRUD -->
router.post('/', ctrl.crearLibro);

router.get('/', ctrl.obtenerLibros);

router.get('/:id', ctrl.obtenerLibro);

router.put('/:id', ctrl.editarLibro);

router.delete('/:id', ctrl.eliminarLibro);

module.exports = router; 