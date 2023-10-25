var express = require('express');
var router = express.Router();

const {
    addObject,readObject,deleteObject
  } = require('../controllers/objects.controller.js');
const  {
    loanObject,loanDeleteObject,loanReadObject
} = require('../controllers/loan.controller.js');
const {
  searchObj, searchLoan
} = require('../controllers/searchObject.controller.js')

  router.post('/addObject', addObject);
  router.post('/readObject', readObject);
  router.post('/deleteObject', deleteObject);


  router.post('/loanObject', loanObject);
  router.post('/loanReadObject', loanReadObject);
  router.post('/loanDeleteObject', loanDeleteObject);

  router.get('/searchObject',searchObj)
  router.get('/searchLoan',searchLoan)
  module.exports = router;
    