import React, { Component } from 'react';
import CounterItem from '../counter-item/counter-item'
class CounterContainer extends Component {

    render() {
        console.log(this.props.id);
        return (
            <div className="counter-container">
                <CounterItem id={this.props.id} />
                <button className="Delete-button" >Delete counter</button>
                <button className="Reset-button">Reset counter</button>
                <button className="Block-button" >Block counter</button>
            </div>
        )
    }
}

export default CounterContainer