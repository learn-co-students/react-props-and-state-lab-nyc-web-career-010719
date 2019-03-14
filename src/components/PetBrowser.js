import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    if (!this.props.pets) return null;
    let allPets = this.props.pets.map(p => {
      return (
        <Pet
          pet={p}
          isAdopted={p.isAdopted}
          onAdoptPet={this.props.onAdoptPet}
        />
      )
    });

    return (
      <div className="ui cards">
        {allPets}
      </div>
    );
  };
};

export default PetBrowser;
