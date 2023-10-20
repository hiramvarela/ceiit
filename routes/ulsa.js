var express = require('express');
var router = express.Router();

const {
    addObject
  } = require('../controllers/objects.controller.js');

  router.post('/addObject', addObject);
//   router.post('/iniciar_sesion', iniciarSesion);
  
  module.exports = router;
    