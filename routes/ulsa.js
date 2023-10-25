var express = require('express');
var router = express.Router();
const { verifyJwt } = require('../controllers/auth.controller.js');
const {
    addObject,readObject,deleteObject
  } = require('../controllers/objects.controller.js');
const  {
    loanObject,loanDeleteObject,loanReadObject
} = require('../controllers/loan.controller.js');
const {
  searchObj, searchLoan,changeStatus
} = require('../controllers/searchObject.controller.js')

  router.post('/addObject', verifyJwt,addObject);
  router.post('/readObject', verifyJwt,readObject);
  router.post('/deleteObject', verifyJwt,deleteObject);


  router.post('/loanObject', verifyJwt,loanObject);
  router.post('/loanReadObject', verifyJwt,loanReadObject);
  router.post('/loanDeleteObject', verifyJwt,loanDeleteObject);

  router.get('/searchObject',verifyJwt,searchObj)
  router.get('/searchLoan',verifyJwt,searchLoan)
  router.get('/changeStatus',verifyJwt,changeStatus)
  module.exports = router;
    