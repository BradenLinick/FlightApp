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

    
    componentDidMount() {        
        /*fetch(`https://api.skypicker.com/flights?flyFrom=${this.props.departure}&to=${this.props.arrival}&dateFrom=${this.props.dateFrom}&dateTo=${this.props.dateTo}`) */
        fetch(`https://api.skypicker.com/flights?flyFrom=${this.props.departure}&to=${this.props.arrival}&     dateFrom=18/11/2018&dateTo=12/12/2018`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json.data);
                this.setState({flightsArray: json.data})             
            });
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