const connection = require('../infrastructure/connection')


class Seller {

  create(seller, res)
  {
    const sql = 'INSERT INTO Sellers SET ?'

    connection.query(sql, seller, (erro, result) =>{
      if(erro)
          res.status(400).json(erro)
      else
          res.status(201).json(result)
  })
  }

  get(res)
  {
    const sql = 'SELECT * FROM Sellers'

    connection.query(sql, (erro, results) => {
      if(erro)
          res.status(400).json(erro)
      else
          res.status(200).json(results)  
    })
  }

  getById(id, res)
  {
    const sql = `SELECT * FROM Sellers WHERE  idSellers = ${id}`

    connection.query(sql, (erro, results) => {
      const result = results[0]
      if(erro)
        res.status(400).json(erro)
      else
        res.status(200).json(result) 
    })
  }


  getByName(body, res)
  {
    const sql = `SELECT * FROM Sales.Sellers WHERE name like '%${body.sellerName}%' ;`
    connection.query(sql, (erro, results) => {
      if(erro)
        res.status(400).json(erro)
      else
      {
        if(results.length === 0)
          res.status(400).json({reason:"Nao existe vendedor com este nome"})
        else{
          const Sales = require('../models/sales')
          body.sellerName = JSON.parse(JSON.stringify(results[0])).name
          Sales.create(body, res)
        }
      }
    })
  }
  getValuesList(res)
  {
    const sql = `SELECT sellerName, SUM(saleValue) as 'SumOfSales' FROM Sales GROUP BY sellerName ORDER BY SUM(saleValue) DESC;`
    connection.query(sql, (erro, results) => {
      if(erro)
        res.status(400).json(erro)
      else
        res.status(200).json(results) 
    })
  }



  patch(id, values, res)
  {
    const sql = 'UPDATE Sellers SET ? WHERE idSellers = ?'

    connection.query(sql, [values, id], (erro, result) => {  
      if(erro)
          res.status(400).json(erro)
      else
          res.status(200).json(result)
    })
  }

  delete(id, res)
  {
    const sql = 'DELETE FROM Sellers WHERE idSellers = ?'

    connection.query(sql,  id, (erro, result) => {        
    if(erro)
      res.status(400).json(erro)
    else
      res.status(200).json(result)
    })
  }
}


module.exports = new Seller