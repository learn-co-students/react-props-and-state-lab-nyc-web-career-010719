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

  handleChange = (e) => {
    this.setState({
      ...this.state,
      filters: {type: e.target.value}
    })
  }

  fetchPets = (e) => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
        .then(res => res.json())
        .then(pets => {
          this.setState({
            pets: [...pets],
            ...this.state.filters
          })
        })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(res => res.json())
        .then(pets => {
          this.setState({
            pets: [...pets],
            ...this.state.filters
          })
        })
    }
  }

  adoptPet = (id) => {
    let pet = this.state.pets.find(pet => pet.id === id)
    // debugger
    pet.isAdopted = true
  }

  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
