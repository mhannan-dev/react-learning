import React, { Component } from 'react';

export default class HookUseState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  
  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  resetData = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Count: {count}</h1>

        {count >= 5 && <p>Count has reached 5 or more!</p>}
        {count <= -5 && <p>Count has reached -5 or less!</p>}

        <button className='incrementButton' onClick={this.handleIncrement} disabled={count >= 5}>
          Increment
        </button>
        
        <button className='decrementButton' onClick={this.handleDecrement} disabled={count <= -5}>
          Decrement
        </button>
        
        <button className='resetButton' onClick={this.resetData}>
          Reset
        </button>
      </div>
    );
  }
}
