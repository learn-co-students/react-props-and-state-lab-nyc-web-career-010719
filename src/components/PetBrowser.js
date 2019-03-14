import React from 'react'

import Pet from './Pet'


class PetBrowser extends React.Component {

  renderPets = () =>{
    let pets = this.props.pets
    return <p>{pets}</p>
  }


  render() {
    const petCards = this.props.pets.map(pet => (
  <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
))

    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
