import React, { Component } from 'react';
import './App.css';
import StepsComponent from './components/shared/steps';
import ContentComponent from './components/shared/content';

class App extends Component {
  state = {
    valueFiltered: '',
    travelSelected: {},
    travelsLoaded: false,
  }
  loadTravels = () => {
    this.setState({ travelsLoaded: true });
  }
  handleValue = () => {

  }
  handleTravel = (obj) => {
    if (this.state.travelsLoaded) {
      if (obj.destinity && obj.destinity.length) {
        console.log(obj)
        this.setState({ travelSelected: obj }, () => {
          alert('Viaje seleccionado! Ya puedes utilizar las opciones en la parte superior.')
        })
      }
    }
  }
  render() {
    const { valueFiltered, travelSelected, travelsLoaded } = this.state;
  
    return (
      <div className="main-app">    
        <StepsComponent travelSelected={travelSelected} />
        <div className="body-app">
          <button className="loadTravels" onClick={this.loadTravels}>VER VIAJES</button>
          <ContentComponent valueFiltered={valueFiltered} travelsLoaded={travelsLoaded} handleValue={this.handleValue} handleTravel={this.handleTravel}/>
        </div>
      </div>
    );
  }
}

export default App;
