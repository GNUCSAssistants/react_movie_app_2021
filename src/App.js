import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    counter: 0
  };

  plus = () => {
    this.setState(current => ({ counter: current.counter + 1}));
  };

  minus = () => {
    this.setState(current => ({ counter: current.counter - 1}));
  };

  render() {
    return <div>
      <h1>The number is: {this.state.counter}</h1>
      <button onClick={ this.plus }>Plus</button>
      <button onClick={ this.minus }>Minus</button>
    </div>
  }
}

export default App;
