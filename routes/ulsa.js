var express = require('express');
var router = express.Router();

const {
    addObject,readObject,deleteObject
  } = require('../controllers/objects.controller.js');
const  {
    loanObject,loanDeleteObject,loanReadObject
} = require('../controllers/loan.controller.js');

  router.post('/addObject', addObject);
  router.post('/readObject', readObject);
  router.post('/deleteObject', deleteObject);


  router.post('/loanObject', loanObject);
  router.post('/loanReadObject', loanReadObject);
  router.post('/loanDeleteObject', loanDeleteObject);

  
  module.exports = router;
    