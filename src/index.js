import React from 'react';
import { render } from 'react-dom';
import Load from './loader/loader.jsx';
import './index.css';
import './index.html';
import Flights from './flights/flights.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        
        <Load />
        <Flights />
        
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'));