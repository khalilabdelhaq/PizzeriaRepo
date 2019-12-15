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
        <form onSubmit={this.props.suivant}>
        <div className='row'>
          <div className='six columns'>
            <label>Nom</label>
            <input
              className='u-full-width'
              placeholder='First Name'
              type='text'
              value={this.props.nom}
              
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Prénom</label>
            <input
              className='u-full-width'
              placeholder='Last Name'
              type='text'
              value={this.props.prenom}
              onChange={this.handleLastNameChanged}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Adresse</label>
            <textarea
              className='u-full-width'
              placeholder='Last Name'
              type='text'
              value={this.props.adresse}
              onChange={this.handleLastNameChanged}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Téléphone</label>
            <input
              className='u-full-width'
              placeholder='Last Name'
              type='text'
              onChange={this.handleLastNameChanged}
              value={this.props.tel}
            />
          </div>
        </div>
        <div>
        <button type="submit" className="next">Next</button>
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