import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleOnChangeType = e => {
    this.setState({
      filters: {
        type: e.target.value
      }
    });
  };

  handleOnFindPetsClick = () => {
    this.getPets(this.state.filters.type)
  };

  getPets = type => {
    let url = '/api/pets';

    if (type !== 'all') {
      url += `?type=${type}`;
    };

    fetch(url)
    .then(r => r.json())
    .then(pets => {
      this.setState({
        pets: pets
      });
    });
  };

  handleAdoptPet = (petId) => {
    let pet = this.state.pets.find(p => {
      return p.id === petId;
    });

    pet.isAdopted = true;

    let petIndex = this.state.pets.indexOf(pet);

    this.setState({
      pets: [...this.state.pets.slice(0, petIndex), pet, ...this.state.pets.slice(petIndex + 1)]
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={e => this.handleOnChangeType(e)}
                onFindPetsClick={e => this.handleOnFindPetsClick(e)}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
