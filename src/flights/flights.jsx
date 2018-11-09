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
        let newArray = [];        
        fetch("https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2018&dateTo=12/12/2018")
            .then(resp => resp.json())
            .then(function (resp) {
                resp.forEach(element => {
                    console.log(element);
                    newArray.push(element);
                })
            })
            .then(() => this.setState({flightsArray: newArray}))
            console.log(flightsArray);
    }







    render() {
        return (

        )
    }

}