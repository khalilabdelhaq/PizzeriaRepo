import React from 'react';
import { connect } from "react-redux";
class StepTwo extends React.Component {
  constructor (props) {
    super(props)
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleEmailConfirmChanged = this.handleEmailConfirmChanged.bind(this);
  }

  handleEmailChanged (event) {
    //this.setState({email: event.target.value})
  }

  handleEmailConfirmChanged (event) {
    //this.setState({emailConfirm: event.target.value})
  }

  render () {
    return (
      <div>
        <form>
        <div className='row'>
          <div className='six columns'>
            <label>Type Pizza</label>
            <select
             name="typePizza"
             value={this.props.commande.typePizza}
              className='u-full-width required'
              onChange={this.props.handleInputChange} >
            <option value="Margaritta">Margaritta</option>
            <option value="4 saison">4 saison</option>
            <option value="Mixte">Mixte</option>
           </select>
          </div>
        </div>
        
        <div className='row'>
          <div className='four columns'>
          <label>Taille</label>
            <select
             value={this.props.commande.taillePizza}
             name="taillePizza"
             onChange={this.props.handleInputChange}
              className='u-full-width required'
               >
            <option value="Medium">Medium</option>
            <option value="XL">XL</option>
            <option value="Large">Large</option>
           </select>
          </div>
        </div>
        
        <div className='row'>
        <div className='six columns'>
            <label>Sauce</label>
            <select
             value={this.props.commande.saucePizza}
             name="saucePizza"
             onChange={this.props.handleInputChange}
              className='u-full-width required'
               >
            <option value="Base Crème fraîche">Base Crème fraîche</option>
            <option value="Base Sauce Tomate">Base Sauce Tomate</option>
            <option value="Mixte">Mixte</option>
           </select>
          </div>
          </div>
          <div className='row'>
          <div className='six columns'>
            <label>Quantite</label>
            <input type="number"
              className='u-full-width'
              placeholder='Last Name'
              name="quantite"
              value={this.props.commande.quantite}
              onChange={this.props.handleInputChange}
            />
          </div>
        </div>
        <div>
        <button type="button" className="previous" onClick={this.props.previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Valider</button>
        </div>
        </form>
      </div>
    )
  }
}
 //cette fonction permet de selectionner juste les donnée utilisé par le composant connecté
 const mapStateToProps =(state) => ({
  typeTizza : state.typeTizza,
  taillePizza : state.taillePizza,
  saucePizza : state.saucePizza,
});
//cette fonction permet de connecter un composant react au store
export default connect(mapStateToProps)(StepTwo);