import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    idSales: null,
    sellerName: '',
    customerName: '',
    dateOfSale: '',
    saleItemName: '',
    saleValue: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target)
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://172.17.0.2:3000/sales', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sellerName: this.state.sellerName,
        customerName: this.state.customerName,
        dateOfSale: this.state.dateOfSale,
        saleItemName: this.state.saleItemName,
        saleValue: this.state.saleValue
      })
    })
      .then(response => response.json())
      .then(item => {
        console.log(item)
        if(item.affectedRows){
          this.props.addItemToState(this.state)
          this.props.toggle()
        } else {
          window.confirm(`${item.reason}`)
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch(`http://172.17.0.2:3000/sales/${this.state.idSales}`, {
      method: 'patch',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify({
        sellerName    : this.state.sellerName,
        customerName  : this.state.customerName,
        dateOfSale    : this.state.dateOfSale,
        saleItemName  : this.state.saleItemName,
        saleValue     : this.state.saleValue
      })
    })
      .then(response => response.json())
      .then(item => {
        if(item.affectedRows){
          this.props.addItemToState(this.state)
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { idSales, sellerName, customerName, dateOfSale, saleItemName, saleValue } = this.props.item
      this.setState({ idSales, sellerName, customerName, dateOfSale, saleItemName, saleValue })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="Seller Name">Seller Name</Label>
          <Input type="text" name="sellerName" id="sellerName" onChange={this.onChange} value={this.state.sellerName === null ? '' : this.state.sellerName} />
        </FormGroup>
        <FormGroup>
          <Label for="Customer Name">Customer Name</Label>
          <Input type="text" name="customerName" id="customerName" onChange={this.onChange} value={this.state.customerName === null ? '' : this.state.customerName}  />
        </FormGroup>
        <FormGroup>
          <Label for="Date of Sale">Date of Sale</Label>
          <Input type="text" name="dateOfSale" id="dateOfSale" onChange={this.onChange} value={this.state.dateOfSale === null ? '' : this.state.dateOfSale}  />
        </FormGroup>
        <FormGroup>
          <Label for="Item">Item</Label>
          <Input type="text" name="saleItemName" id="saleItemName" onChange={this.onChange} value={this.state.saleItemName === null ? '' : this.state.saleItemName}  />
        </FormGroup>
        <FormGroup>
          <Label for="Item price">Item price</Label>
          <Input type="text" name="saleValue" id="saleValue" onChange={this.onChange} value={this.state.saleValue === null ? '' : this.state.saleValue}  />
        </FormGroup>
        <br/><br/>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm