import React, { Component } from 'react';
import './App.css';
import { CartTotal } from './cartTotal/components/cartTotalContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CartTotal />
      </div>
    );
  }
}

export default App;
