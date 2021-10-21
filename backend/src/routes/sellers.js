var express = require('express');
var router = express.Router();

const Sellers = require('../models/sellers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Sellers.get(res)
});


router.get('/:id', (req, res, next) => {

  const id = parseInt(req.params.id)
  Sellers.getById(id, res)

  //Nao tem validacao contra SQL Injection e erros sugestivos
})


router.post('/', (req, res, next) => {

  const seller = req.body
  Sellers.create(seller, res)

  //Nao tem validacao contra SQL Injection e erros sugestivos
})

router.delete('/:id', (req, res, next) => {

  const id = parseInt(req.params.id)
  Sellers.delete(id, res)

  //Nao tem validacao contra SQL Injection e erros sugestivos
})

router.patch('/:id', (req, res) => {
  const id     = parseInt(req.params.id)
  const values = req.body

  Sellers.patch(id, values, res)
})


module.exports = router;
