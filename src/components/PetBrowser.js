import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderAllPets = () => {
    const pets = this.props.pets.map((pet, key) => {
      return (
        <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
      )
    })
    return pets
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderAllPets()}
      </div>
    )
  }
}

export default PetBrowser
