import React from 'react';
import { render } from 'react-dom';



export default class Flights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flightsArray: []
        };
    }

    render() {
        return(
            <div className="flightsTable">
                    {this.state.flightsArray.map(flights => <p> {flights.flyFrom} </p>)}
                    {this.state.flightsArray.map(flights => <p> {flights.flyTo} </p>)}
            </div>
        )
    }
}