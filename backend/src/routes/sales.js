var express = require('express');
var router = express.Router();

const Sales = require('../models/sales')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Sales.get(res)
});


router.get('/:id', (req, res, next) => {

  const id = parseInt(req.params.id)
  Sales.getById(id, res)

  //Nao tem validacao contra SQL Injection e erros sugestivos
})


router.post('/', (req, res, next) => {

  const Sellers = require('../models/sellers')
  const sale    = req.body

  Sellers.getByName(sale, res)
  //Nao tem validacao contra SQL Injection e erros sugestivos
})

router.delete('/:id', (req, res, next) => {

  const id = parseInt(req.params.id)
  Sales.delete(id, res)

  //Nao tem validacao contra SQL Injection e erros sugestivos
})

router.patch('/:id', (req, res) => {
  const id     = parseInt(req.params.id)
  const values = req.body

  Sales.patch(id, values, res)
})

module.exports = router;
