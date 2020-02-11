import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showErrorMessage:false
    };
  }
  render() {
    return (
      <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
      {this.state.showErrorMessage ? <h2 data-test="error-display" style={{color:"red"}}>The counter cannot go below 0</h2> : null}
      <button
        data-test="increment-button"
        onClick={() => this.setState(prev => {

          return { counter: prev.counter + 1,showErrorMessage:false }
        })}
        >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if(this.state.counter === 0){
            this.setState({ showErrorMessage: true })
          }else{
            this.setState(prev => {
              return {
                 counter: prev.counter - 1 
              }
            })
          }
        }}
        >
        Decrement counter
      </button>
      </div>
    );
  }
}

export default App;
