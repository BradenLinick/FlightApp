import React from 'react';
import Select from 'react-select';

const departure = [
  { value: 'New York', label: 'New York' },
  { value: 'Dublin', label: 'Dublin' },
  { value: 'California', label: 'California' }
];

/*const arrival = [
  { value: 'New York', label: 'New York' },
  { value: 'Dublin', label: 'Dublin' },
  { value: 'California', label: 'California' }
]; */

export default class Newdrop extends React.Component {
  constructor(props) {
    super(props)
  
  this.state = {
    selectedOption: null,
  }
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (

      <div>

        <Select
        value={selectedOption}
        onChange={this.handleChange}
        departure={departure}
        />

      <Select 
      value={selectedOption}
      onChange={this.handleChange}
      arrival={departure}
      />


      </div>
      
    );
  }
}