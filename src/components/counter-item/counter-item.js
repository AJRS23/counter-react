import React, { Component } from 'react';
class CounterItem extends Component {
    state = {
        count: 0
    };
    increase = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };
    render() {
        console.log(this.props.id);
        return (

            <button onClick={this.increase}>{this.state.count}</button>


        )
    }
}
export default CounterItem