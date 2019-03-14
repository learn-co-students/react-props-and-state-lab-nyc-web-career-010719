import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // console.log(this.props);
    return this.props.pets.map( pet => {
      return (
        <div className="ui cards">
          <Pet
            id={pet.id}
            pet={pet}
            name={pet.name}
            type={pet.type}
            age={pet.age}
            gender={pet.gender}
            weight={pet.weight}
            onAdoptPet={this.props.onAdoptPet}
            isAdopted={false}
          />
        </div>
      )
    })
  }
}

export default PetBrowser
