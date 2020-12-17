import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    amount: 0,
    eatenSushi: [],
    moneyUsed: 0,
    moneyInWallet: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({sushis: data}))
  }

  showMoreSushis = () => {
    this.setState({
      amount: this.state.amount + 4
    })
  }

  removeSushi = (sushi) => {
    this.setState({
      // array of sushi already got eaten
      eatenSushi: [sushi, ...this.state.eatenSushi],
      moneyUsed: this.state.moneyUsed + sushi.price
    })
  }

  addMoney = (e, value) => {
    e.preventDefault()
    this.setState({
      moneyInWallet: this.state.moneyInWallet + value - this.state.moneyUsed
    })
    console.log('add money', this.state.moneyInWallet)
    e.target.reset()
  }

  render() {
    console.log('money used', this.state.moneyUsed)
    console.log('money in wallet', this.state.moneyInWallet)
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis} 
          amount={this.state.amount} 
          showMoreSushis={this.showMoreSushis}
          removeSushi={this.removeSushi}
          eatenSushi={this.state.eatenSushi}
          moneyUsed={this.state.moneyUsed}
          addMoney={this.addMoney}
        />

        <Table 
          eatenSushi={this.state.eatenSushi}
          moneyUsed={this.state.moneyUsed}
          moneyInWallet={this.state.moneyInWallet}
        />
      </div>
    );
  }
}

export default App;