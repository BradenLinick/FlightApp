import React, { Component } from 'react';
import Loader from 'react-loader';

export default class Load extends Component {
  constructor() {
    super();

    this.state = {
      isLoaded: true
    };
  }

  toggleLoader() {
    this.setState({ isLoaded: !this.state.isLoaded });
  }

  renderControl(isLoaded) {
    let buttonText = isLoaded ? 'Show Loading Spinner' : 'Hide Loading Spinner';
    return <button onClick={() => this.toggleLoader()}>{buttonText}</button>;
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <div className="loader-wrapper">
        {this.renderControl(isLoaded)}
        <Loader loaded={isLoaded}>
          <div className="loaded-contents">Loading finished!</div>
        </Loader>
      </div>
    );
  }
}