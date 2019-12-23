import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//setState

//State
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicks: 0 };
  }

  render() {
    return <div onClick={() => {
      this.setState({ clicks: this.state.clicks + 1 });
    }}>
      This div has been clicked {this.state.clicks} times.
      </div>
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div onClick={this.props.onClick}>This div has been clicked {this.props.clicks} times.</div>
//     );
//   }
// }

export default App;