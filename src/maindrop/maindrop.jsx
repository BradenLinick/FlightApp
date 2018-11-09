import React, { Component } from 'react';
import Dropmulti from './dropmulti/dropmulti.jsx';
import Drop from './drop/drop.jsx';
import {DropdownMultiple, Dropdown} from 'reactjs-dropdown-component';

export default class Maindrop extends Component {
    constructor(){
    super()
    this.state = {
      departure: [
        {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'location'
        },
        {
          id: 1,
          title: 'Dublin',
          selected: false,
          key: 'location'
        },
        {
          id: 2,
          title: 'California',
          selected: false,
          key: 'location'
        },
        {
          id: 3,
          title: 'Istanbul',
          selected: false,
          key: 'location'
        },
        {
          id: 4,
          title: 'Izmir',
          selected: false,
          key: 'location'
        },
        {
          id: 5,
          title: 'Oslo',
          selected: false,
          key: 'location'
        },
        {
          id: 6,
          title: 'Zurich',
          selected: false,
          key: 'location'
        }
      ],
      arrival: [
        {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'departure'
        },
        {
          id: 1,
          title: 'Dublin',
          selected: false,
          key: 'departure'
        },
        {
          id: 2,
          title: 'California',
          selected: false,
          key: 'departure'
        },
        {
          id: 3,
          title: 'Istanbul',
          selected: false,
          key: 'departure'
        },
        {
          id: 4,
          title: 'Izmir',
          selected: false,
          key: 'departure'
        },
        {
          id: 5,
          title: 'Oslo',
          selected: false,
          key: 'departure'
        },
        {
          id: 6,
          title: 'Zurich',
          selected: false,
          key: 'departure'
        }
      ]
    }
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render() {
    return (
      <div className="App">
        <p>Dropdown menu examples</p>

        <div className="wrapper">
          <Drop
            title="Departure"
            list={this.state.departure}
            resetThenSet={this.resetThenSet}
          />

          
          <Drop
            title="Arrival"
            list={this.state.arrival}
            resetThenSet={this.resetThenSet}
          />
        </div>
      </div>
    );
  }
}