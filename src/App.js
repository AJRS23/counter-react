import React, { Component } from 'react';
import Title from './components/title/title'
import CounterContainer from './components/counter-container/counter-container'
import './App.css';

class App extends Component {
  state = {
    listCounters: [],
    count: 0
  };

  addCounter = () => {
    this.setState({
      listCounters: [...this.state.listCounters, +new Date()],
      count: this.state.count + 1
    });

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title count={this.state.count} />
          <button className="App-button" onClick={() => { this.addCounter() }}>Add counter</button>
        </header>
        <div>
          {this.state.listCounters.map(idCounter => <CounterContainer key={idCounter} id={idCounter} />)}
        </div>



      </div>
    );
  }
}

export default App;
