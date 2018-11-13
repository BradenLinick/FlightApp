import React from 'react';
import Select from 'react-select';
import './newdrop.css';
import { DateTime } from 'luxon';

const departure = [
  { value: 'BKK', label: 'Bangkok' },
  { value: 'PRG', label: 'Prague' },
  { value: 'VLC', label: 'Valencia' }
];

const arrival = [
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'LGW', label: 'Laguardia' },
  { value: 'VLC', label: 'Valencia' }
];

export default class Newdrop extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedDep: null,
      selectedArr: null,
      flightsArray: []
    }
  }

  handleFlightSearch = (dep, arr) => {
    fetch(`https://api.skypicker.com/flights?flyFrom=${dep}&to=${arr}&dateFrom=19/11/2018&dateTo=12/12/2018`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json.data);
                this.setState({flightsArray: json.data})             
            });
  }
  
  handleChangeDep = (selectedDep) => {
    this.setState({ selectedDep });
    console.log(`Option selected:`, selectedDep);
  }
  handleChangeArr = (selectedArr) => {
    this.setState({ selectedArr });
    console.log(`Option selected:`, selectedArr);
  }

  toTime(seconds) {
    return DateTime.fromMillis(seconds * 1000).toFormat('hh:mm');
  }
  render() {
    const { selectedDep, selectedArr } = this.state;

    return (
      <>
        <div className="d-flex">
          <Select
            value={selectedDep}
            onChange={this.handleChangeDep}
            options={departure}
            className="select"
          />
          <Select
            value={selectedArr}
            onChange={this.handleChangeArr}
            options={arrival}
            className="select"
          />
        </div>
        <button onClick={() => this.handleFlightSearch(this.state.selectedDep.value, this.state.selectedArr.value)}>Select flights</button>
        <div className="table">
          {this.state.flightsArray.map(flights => 
            <div key={flights.id} className="row">
            <div className="item">Departure: {flights.flyFrom} </div>
            <div className="item">Arrival: {flights.flyTo}</div>
            <div className="item">Departure time: {this.toTime(flights.dTime)}</div>
            <div className="item">Arrival time (local): {this.toTime(flights.aTime)}</div>
            <div className="item">Cost: ${flights.price}</div>
            </div>
          )} 
          </div>
        
      </>
    );
  }
}