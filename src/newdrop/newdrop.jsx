import React from 'react';
import Select from 'react-select';
import './newdrop.css';

const departure = [
  { value: 'NYC', label: 'New York' },
  { value: 'PRG', label: 'Prague' },
  { value: 'LND', label: 'London' }
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
  render() {
    const { selectedDep, selectedArr } = this.state;

    return (
      <>
      <Select
        value={selectedDep}
        onChange={this.handleChangeDep}
        options={departure}
      />
      <Select
        value={selectedArr}
        onChange={this.handleChangeArr}
        options={arrival}
      />
      <button onClick={() => this.handleFlightSearch(this.state.selectedDep.value, this.state.selectedArr.value)}>Select flights</button>
      <div className="table">
      {this.state.flightsArray.map(flights => 
        <div className="row">
        <div className="item">Departure: {flights.flyFrom} </div>
        <div className="item">Arrival: {flights.flyTo}</div>
        <div className="item">Departure time: {flights.dTime}</div>
        <div className="item">Arrival time (local): {flights.aTime}</div>
        <div className="item">Cost: {flights.price}</div>
        </div>
      )} 
      </div>
      </>
    );
  }
}