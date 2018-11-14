import React from 'react';
import Select from 'react-select';
import './newdrop.css';
import { DateTime } from 'luxon';
import Loader from 'react-loader';

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
      flightsArray: [],
      isLoaded: true
    }
  }

  handleFlightSearch = (dep, arr) => {
    this.setState({isLoaded: false})
    fetch(`https://api.skypicker.com/flights?flyFrom=${dep}&to=${arr}&dateFrom=19/11/2018&dateTo=12/12/2018`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json.data);
                this.setState({
                  flightsArray: json.data,
                  isLoaded: true
                });             
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

    if (this.state.isLoaded) {
    return (
      <>
        <div id="container" className="d-flex">
          <h4 className="m-2">Departure:</h4> 
          <Select
            value={selectedDep}
            onChange={this.handleChangeDep}
            options={departure}
            className="select"
          />
          <h4 className="m-2">Arrival:</h4> 
          <Select
            value={selectedArr}
            onChange={this.handleChangeArr}
            options={arrival}
            className="select"
          />
        </div>
        <button onClick={() => this.handleFlightSearch(this.state.selectedDep.value, this.state.selectedArr.value)}>Select flights</button>
        
        <table>
          {this.state.flightsArray.map(flights => 
            <tr>
              <td className="border border-dark p-3">Departure: {flights.flyFrom} </td>
              <td className="border border-dark p-3">Arrival: {flights.flyTo}</td>
              <td className="border border-dark p-3">Departure time: {this.toTime(flights.dTime)}</td>
              <td className="border border-dark p-3">Arrival time (local): {this.toTime(flights.aTime)}</td>
              <td className="border border-dark p-3">Cost: ${flights.price}</td>
            </tr>
          )}
          </table> 
          

           {/* <div key={flights.id} className="row">
            <div className="item">Departure: {flights.flyFrom} </div>
             <div className="item">Arrival: {flights.flyTo}</div>
             <div className="item">Departure time: {this.toTime(flights.dTime)}</div>
             <div className="item">Arrival time (local): {this.toTime(flights.aTime)}</div>
             <div className="item">Cost: ${flights.price}</div>
             </div> */}
        
      </>
    );
   } else {
     return (
          <div id="container" className="d-flex">
          <h4 className="m-2">Departure:</h4> 
          <Select
            value={selectedDep}
            onChange={this.handleChangeDep}
            options={departure}
            className="select"
          />
          <h4 className="m-2">Arrival:</h4> 
          <Select
            value={selectedArr}
            onChange={this.handleChangeArr}
            options={arrival}
            className="select"
          />
        <Loader />
        </div>
     );
   }

  }
}