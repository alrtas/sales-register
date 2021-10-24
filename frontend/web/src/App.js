import React, { Component }     from 'react';
import { Container, Row, Col }  from 'reactstrap';
import ModalForm        from './Components/Modals/Modal';
import DataTable        from './Components/Tables/DataTable';
import DataTableSellers from './Components/Tables/DataTableSellers';

class App extends Component {

  state = {
    items: [],
    sellers: []
  }

  getSellers(){
    fetch('http://172.17.0.2:3000/sellers/values-list/')
      .then(response => response.json())
      .then(items => {
        this.setState(({
          sellers: items
        }))
      })
      .catch(err => console.log(err))
  }

  getItems(){
    fetch('http://172.17.0.2:3000/sales/')
      .then(response => response.json())
      .then(items => {
        this.setState({items})
      })
      .catch(err => console.log(err))
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
    this.getSellers()
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>Sales</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          
            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm buttonLabel="Add Sale" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <br/> <br/>
            <h1 style={{margin: "20px 0"}}>Top Sallers</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTableSellers items={this.state.sellers} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App