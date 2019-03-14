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

  onChangeType = (type) => {
    this.setState ({
      filters: {
        type: type
      }
    })
  }


  onFindPetsClick = () => {
      if (this.state.filters.type == 'all'){
      fetch('/api/pets')
      .then(resp => resp.json())
      .then((myJson) => {
        this.setState ({
          pets: myJson
        })
        console.log(this.state.pets)
      });
    }

    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then((myJson) => {
        this.setState ({
          pets: myJson
        })
        console.log(this.state.pets)
      });
    }
  }

onAdoptPet = (id) => {
  const pets = [...this.state.pets]
  let newPets = pets.map((pet) =>{
    if (pet.id === id){
        pet.isAdopted = true
      }
      return pet
    })
    console.log(newPets)
    this.setState({
      pets: newPets
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
