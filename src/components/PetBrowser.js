import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = (pets) => {
    console.log(pets)
    console.log("we are here")
    // debugger
    return pets.map(p => <Pet key={p.id} onAdoptPet={this.props.onAdoptPet} pet={p} isAdopted={p.isAdopted}/>)
  }

  render() {
    return (
      <div
        className="ui cards"
      >
        {this.renderPets(this.props.pets)}
      </div>
  )}
}

export default PetBrowser
