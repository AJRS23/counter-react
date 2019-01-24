import React, { Component } from 'react';

import { connect } from 'react-redux';
import './counter-container.css'

class CounterContainer extends Component {



    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0,
            blocked: false
        };

        this.handleSelected = this.handleSelected.bind(this);
    }

    increase = () => {
        if (!this.state.blocked) {
            this.setState(({ clickCount }) => ({
                clickCount: clickCount + 1
            }));
        }

    };
    reset = () => {
        this.setState(({ clickCount }) => ({
            clickCount: 0
        }));
    }
    block = () => {
        this.setState(({ blocked }) => ({
            blocked: !(this.state.blocked)
        }));
    }

    handleSelected(indexCounter) {
        this.props.onDeleteCounter(indexCounter);
    }

    render() {
        let counter_container = "counter-container"
        if (this.state.blocked) {
            counter_container += " blocked"
        }
        console.log(this.props.id);
        console.log(this.props.ind);
        return (
            <div className={counter_container}>
                <button onClick={this.increase}>{this.state.clickCount}</button>
                <button className="Delete-button" onClick={() => { this.handleSelected(this.props.ind) }}>Delete</button>
                <button className="Reset-button" onClick={this.reset}>Reset</button>
                <button className="Block-button" onClick={this.block}>Block</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.count,
        listCounters: state.listCounters
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCounter: (indexCounter) => {
            dispatch({ type: 'DELETE_COUNTER', indexCounter });
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);