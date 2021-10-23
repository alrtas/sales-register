class Tables {
  init(connection){
      this.connection = connection

      this.createSellers()
      this.createDefaultValuesForSellers()
      this.createSales()
  }

  createSellers() {
    const sql = 'CREATE TABLE IF NOT EXISTS Sellers (`idSellers` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(100) NOT NULL,`phone` VARCHAR(45) NULL,`office` VARCHAR(45) NULL,PRIMARY KEY (`idSellers`));'
    this.connection.query(sql, (erro)=>{
      if(erro){
          console.dir(erro)
      }else{
          console.dir('Sellers table created')
      }
    })
  }

  createDefaultValuesForSellers()
  {
    const sql = [
      "INSERT IGNORE INTO `Sales`.`Sellers` (`idSellers`, `name`, `phone`, `office`) VALUES ('10', 'Thiago Alberto', '48996260373', 'Santa Catarina');",
      "INSERT IGNORE INTO `Sales`.`Sellers` (`idSellers`, `name`, `phone`, `office`) VALUES ('11', 'Pedro Henrique', '4898836472', 'Santa Catarina');",
      "INSERT IGNORE INTO `Sales`.`Sellers` (`idSellers`, `name`, `phone`, `office`) VALUES ('12', 'Valmir Paz', '4733745561', 'Parana');",
      "INSERT IGNORE INTO `Sales`.`Sellers` (`idSellers`, `name`, `phone`, `office`) VALUES ('13', 'Romario Costa', '21998787123', 'Rio de Janeiro');",
      "INSERT IGNORE INTO `Sales`.`Sellers` (`idSellers`, `name`, `phone`, `office`) VALUES ('14', 'Renato Sousa', '11988721154', 'Sao Paulo');"
    ]
    sql.forEach((element, index) => {
      this.connection.query((element), (erro) => {
        if(erro)
        {
          console.dir(`Error inserting ${index+1} seller`)
          console.dir(erro)
        }
        else
        {
          console.dir(`Sellers ${index+1} inserted`)
        }
      })
    })
  }

  createSales() {
    const sql = 'CREATE TABLE IF NOT EXISTS Sales (`idSales` INT NOT NULL AUTO_INCREMENT,`sellerName` VARCHAR(100) NOT NULL,`customerName` VARCHAR(100) NOT NULL,`dateOfSale` VARCHAR(45) NOT NULL,`saleItemName` VARCHAR(100) NOT NULL,`saleValue` DECIMAL(45) NOT NULL,PRIMARY KEY (`idSales`));'
    this.connection.query(sql, (erro)=>{
      if(erro){
          console.dir(erro)
      }else{
          console.dir('Sales table created')
      }
    })
  }
}

module.exports = new Tables