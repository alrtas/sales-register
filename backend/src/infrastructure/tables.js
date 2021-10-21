class Tables {
  init(connection){
      this.connection = connection

      this.createSellers()
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

  createSales() {
    const sql = 'CREATE TABLE IF NOT EXISTS Sales (`idSales` INT NOT NULL AUTO_INCREMENT,`sellerName` VARCHAR(100) NOT NULL,`customerName` VARCHAR(100) NOT NULL,`dateOfSale` VARCHAR(45) NOT NULL,`saleItemName` VARCHAR(100) NOT NULL,`saleValue` VARCHAR(45) NOT NULL,PRIMARY KEY (`idSales`));'
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