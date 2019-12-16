import React from 'react';
import { connect } from "react-redux";
class StepOne extends React.Component {
  constructor (props) {
    super(props)

    this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
  }

  handleFirstNameChanged (event) {
    //this.setState({firstName: event.target.value})
  }

  handleLastNameChanged (event) {
    //this.setState({lastName: event.target.value})
  }

  render () {
    return (
      <div>
        <form>
        <div className='row'>
          <div className='six columns'>
            <label>Nom</label>
            <input
              className='u-full-width'
              placeholder='Nom'
              name="nomClient"
              type='text'
              value={this.props.commande.nom}
              onChange={this.props.handleInputChange}
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Prénom</label>
            <input
              className='u-full-width'
              placeholder='Prénom'
              type='text'
              name="prenomClient"
              value={this.props.commande.prenom}
              onChange={this.props.handleInputChange}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Adresse</label>
            <textarea
              className='u-full-width'
              placeholder='Adresse'
              type='text'
              name="adresse"
              value={this.props.commande.adresse}
              onChange={this.props.handleInputChange}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Téléphone</label>
            <input
              className='u-full-width'
              placeholder='Tél'
              type='text'
              name="tel"
              value={this.props.commande.tel}
              onChange={this.props.handleInputChange}
            />
          </div>
        </div>
        <div>
        <button onClick={this.props.suivant} className="next">Suivant</button>
        </div>
        </form>
      </div>
    )
  }
}
 //cette fonction permet de selectionner juste les donnée utilisé par le composant connecté
 const mapStateToProps =(state) => ({
  nom : state.nom,
  prenom : state.prenom,
  adresse : state.adresse,
  tel : state.tel
});
//cette fonction permet de connecter un composant react au store
export default connect(mapStateToProps)(StepOne);