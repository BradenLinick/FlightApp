import React from 'react';
import Select from 'react-select';

const departure = [
  { value: 'NYC', label: 'New York' },
  { value: 'PRG', label: 'Prague' },
  { value: 'LND', label: 'London' }
];

const arrival = [
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'LGW', label: 'Laguardia' },
  { value: 'Madrid', label: 'Madrid' }
];

export default class Newdrop extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedDep: null,
      selectedArr: null
    }
  }

  handleFlightSearch = (dep, arr) => {
    fetch(`https://api.skypicker.com/flights?flyFrom=${dep}&to=${arr}&dateFrom=18/11/2018&dateTo=12/12/2018`)
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
      </>
    );
  }
}