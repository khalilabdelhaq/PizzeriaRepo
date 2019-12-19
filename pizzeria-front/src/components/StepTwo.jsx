import React from 'react';
import { connect } from "react-redux";
import { Field, ErrorMessage } from 'formik';
class StepTwo extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <div className='row'>
          <label>Type Pizza</label>
          <Field name="typePizza" as="select" placeholder="Type Pizza">
            <option value="">-----Choisir-----</option>
            <option value="Margaritta">Margaritta</option>
            <option value="4 saison">4 saison</option>
            <option value="Mixte">Mixte</option>
          </Field>
          <ErrorMessage name="typePizza" component="div" />
        </div>

        <div className='row'>
          <label>Taille</label>
          <Field name="taillePizza" as="select" placeholder="Taille Pizza">
            <option value="">-----Choisir-----</option>
            <option value="Medium">Medium</option>
            <option value="XL">XL</option>
            <option value="Large">Large</option>
          </Field>
          <ErrorMessage name="taillePizza" component="div" />
        </div>

        <div className='row'>
          <label>Sauce</label>
          <Field name="saucePizza" as="select" >
            <option value="">-----Choisir-----</option>
            <option value="Base Crème fraîche">Base Crème fraîche</option>
            <option value="Base Sauce Tomate">Base Sauce Tomate</option>
            <option value="Mixte">Mixte</option>
          </Field>
          <ErrorMessage name="saucePizza" component="div" />
        </div>
        <div className='row'>
          <label>Quantite</label>
          <Field
            name="quantite"
            type='number'
          />
        </div>
        <div>
          <button type="button" className="previous" onClick={this.props.previousPage}>
            Précédent
        </button>
          <button type="submit" className="next">Valider</button>
        </div>
      </div>
    )
  }
}
//cette fonction permet de connecter un composant react au store
export default connect()(StepTwo);