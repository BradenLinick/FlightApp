import React from 'react';
import { render } from 'react-dom';
import Load from './loader/loader.jsx';
import './index.css';
import './index.html';
import Flights from './flights/flights.jsx';
import Newdrop from "./newdrop/newdrop.jsx"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: 'PRG',
      arrival: 'LGW'
    }    
  }

  componentDidMount() {        
    fetch(`https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2018&dateTo=12/12/2018`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json.data);
            this.setState({flightsArray: json.data})             
        });
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
      <div className="d-flex flex-column" id="container">
        <h1>Smart Flights!</h1>
        
        <Newdrop />
        <Load />
        <Flights departure={this.state.departure} arrival={this.state.arrival} />
        
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'));