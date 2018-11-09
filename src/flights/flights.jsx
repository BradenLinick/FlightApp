import React from 'react';
import { render } from 'react-dom';


export default class Flights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flightsArray: []
        };

        

    }

    componentDidMount() {        
        fetch("https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2018&dateTo=12/12/2018")
            .then(resp => resp.json())
            .then(json => {
                console.log(json.data);
                this.setState({flightsArray: json.data})             
            });
    }

    
    /* componentDidMount() {        
        fetch(`https://api.skypicker.com/flights?flyFrom=${this.props.flyFrom}&to=${this.props.to}&dateFrom=${this.props.dateFrom}&dateTo=${this.props.dateTo}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json.data);
                this.setState({flightsArray: json.data})             
            });
    } */

    handleChange(event) {
        this.setState({flightSearch: event.target.value})
        console.log(flightSearch);
      }







    render() {
        return(
            <div className="flightsTable">

                   <input type="text" name="flightSearch" value={this.state.title} onChange={this.handleChange.bind(this)}/>


                
                    {this.state.flightsArray.map(flights => <p> {flights.flyFrom} </p>)}
              
                    {this.state.flightsArray.map(flights => <p> {flights.flyTo} </p>)}
                

            </div>
        )
        
    }

}