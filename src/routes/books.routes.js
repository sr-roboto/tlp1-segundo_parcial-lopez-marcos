const { Router } = require('express');
const router = Router();
const {ctrl} = require('../controllers/books.controllers');

router.get('/read', ctrl.obtenerLibros);

router.get('/read/:id', ctrl.obtenerLibro);

router.post('/create', ctrl.crearLibro);

router.put('/edit/:id', ctrl.editarLibro);

router.delete('/delete/:id', ctrl.eliminarLIbro);

module.exports = router; 