import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
// import ModalForm from '../Modals/Modal'

class DataTable extends Component {
  deleteItem = idSales => {
    let confirmDelete = window.confirm('Delete sale forever?')
    if(confirmDelete){
      fetch(`http://127.0.0.1:3000/sales/${idSales}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(item => {
        this.props.deleteItemFromState(idSales)
        window.location.reload();
      })
      .catch(err => console.log(err))
    }

  }

  render() {
    const items = this.props.items.map(item => {
      
      return (
        <tr key={item.idSales}>
          <th scope="row">{item.idSales}</th>
          <td>{item.sellerName}</td>
          <td>{item.customerName}</td>
          <td>{item.dateOfSale}</td>
          <td>{item.saleItemName}</td>
          <td>{item.saleValue}</td>
          <td>
            <div style={{width:"110px"}}>
              {/* <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/> */}
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.idSales)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Sale ID</th>
            <th>Seller Name</th>
            <th>Customer Name</th>
            <th>Date of Sale</th>
            <th>Item</th>   
            <th>Item price</th>   
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}


export default DataTable