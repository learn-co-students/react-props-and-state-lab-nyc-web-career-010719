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

  changeFiltersType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
    // console.log(e.target.value);
  }

  findPets = (e) => {
    // console.log("does this work?");
    let url = "/api/pets"

    if (this.state.filters.type != "all") {
      url = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(res => res.json())
    .then(pets => {
      this.setState({ pets })
    })
    // console.log(this.state.filters.type);

  }

  adoptPet = (id) => {
    // console.log("clicked button");
    const pets = this.state.pets.map( pet => {
      return pet.id == id ? {...pet, isAdopted: true} : pet;
    })
    this.setState({ pets })
    // console.log(pets);
  }

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
                onChangeType={this.changeFiltersType}
                onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
