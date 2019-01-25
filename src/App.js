import React, { Component } from 'react';
import Title from './components/title/title'
import CounterContainer from './components/counter-container/counter-container'
import CounterForms from './components/counter-forms/counter-forms'
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected() {
    console.log(this.props.countersLimit)
    if (this.props.countersLimit > 0 && this.props.listCounters.length < this.props.countersLimit) {
      this.props.onAddCounter();
    }
  }




  render() {
    console.log(this.props.listCounters);
    return (
      <div className="App">
        <header className="App-header">
          <CounterForms />
          <Title count={this.props.count} />

          <button className="App-button" onClick={() => { this.handleSelected() }}>Add counter</button>
        </header>
        <div>
          {this.props.listCounters.map(idCounter => <CounterContainer key={idCounter} id={idCounter}
            ind={this.props.listCounters.indexOf(idCounter)} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    listCounters: state.listCounters,
    countersLimit: state.countersLimit
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCounter: () => {
      dispatch({ type: 'ADD_COUNTER' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
