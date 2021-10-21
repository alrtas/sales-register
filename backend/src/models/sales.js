const connection = require('../infrastructure/connection')


class Sales {

  create(seller, res)
  {
    const sql = 'INSERT INTO Sales SET ?'

    connection.query(sql, seller, (erro, result) =>{
      if(erro)
          res.status(400).json(erro)
      else
          res.status(201).json(result)
  })
  }

  get(res)
  {
    const sql = 'SELECT * FROM Sales'

    connection.query(sql, (erro, results) => {
      if(erro)
          res.status(400).json(erro)
      else
          res.status(200).json(results)  
    })
  }

  getById(id, res)
  {
    const sql = `SELECT * FROM Sales WHERE  idSales = ${id}`

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
    const sql = 'UPDATE Sales SET ? WHERE idSales = ?'

    connection.query(sql, [values, id], (erro, result) => {  
      if(erro)
          res.status(400).json(erro)
      else
          res.status(200).json(result)
    })
  }

  delete(id, res)
  {
    const sql = 'DELETE FROM Sales WHERE idSales = ?'

    connection.query(sql,  id, (erro, result) => {        
    if(erro)
      res.status(400).json(erro)
    else
      res.status(200).json(result)
    })
  }
}


module.exports = new Sales