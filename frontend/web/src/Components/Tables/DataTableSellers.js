import React, { Component } from 'react'
import { Table } from 'reactstrap';

class DataTableSellers extends Component { 
  render() {
    const items = this.props.items.map(item => {
      
      return (
        <tr key={item.sellerName}>
          <th scope="row">{item.sellerName}</th>
          <td>{item.SumOfSales}</td>
        </tr>
        )
      })
    
    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Amount in Sales</th> 
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTableSellers