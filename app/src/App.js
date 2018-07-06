import React, { Component } from 'react';
import './App.css';

import * as services from './services';

class App extends Component {


  getWeather = (city, country) => {
    services.getWeather(city, country)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  }

  render() {

    this.getWeather('Braga','pt');

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
