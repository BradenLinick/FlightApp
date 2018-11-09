import React from 'react';
import { render } from 'react-dom';
import Load from './loader/loader.jsx';
import './index.css';
import './index.html';
import Flights from './flights/flights.jsx';
import Maindrop from "./maindrop/maindrop.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: 'PRG',
      arrival: 'LGW'
    }    
  }

  handleDepartureChange(e) {
    this.setState({departure: e.target.value})
    console.log(departure);
  }

  handleArrivalChange(e) {
    this.setState({arrival: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        
        <Maindrop />
        <Load />
        <Flights departure={this.state.departure} arrival={this.state.arrival} />
        
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'));