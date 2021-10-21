const connection = require('../infrastructure/connection')


class Seller {

  create(seller, res)
  {

    console.dir(seller)
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