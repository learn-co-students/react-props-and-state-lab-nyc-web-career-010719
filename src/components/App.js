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

  fetchPets = () => {
    // debugger
    console.log("finding")
    let param = this.state.filters.type
    let url

    if(param === "all"){
      url = `/api/pets`
    }
    else {url = `/api/pets?type=${param}`}

    fetch(url)
    .then(r => r.json())
    .then(fetchedPets => {
      this.setState({
        pets: fetchedPets
      },() => console.log(this.state.pets))
    })
  }

  handleChangeType = ({ target: { value } }) => {
   this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
     return p.id === petId ? { ...p, isAdopted: true } : p
    })
   this.setState({ pets })
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.fetchPets}/>
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
