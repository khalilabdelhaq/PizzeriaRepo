import React from 'react';
import { connect } from "react-redux";
import { Field,ErrorMessage } from 'formik';

class StepOne extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="row">
            <label>Nom</label>
            <Field type="text" name="nomClient" placeholder="Nom" />
            <ErrorMessage name="nomClient" component="div" />
        </div>
          <div className='row'>
            <label>Prénom</label>
            <Field type="text" name="prenomClient" placeholder="Nom" />
            <ErrorMessage name="prenomClient" component="div" />
          </div>
          <div className='row'>
            <label>Adresse</label>
            <Field as="textarea" name="adresse" placeholder="Nom" />
            <ErrorMessage name="adresse" component="div" />
        </div>
        <div className='row'>
            <label>Téléphone</label>
            <Field type="text" name="tel" placeholder="Nom" />
            <ErrorMessage name="tel" component="div" />
        </div>
        <div>
          <button onClick={this.props.suivant} className="next">Suivant</button>
        </div>
      </div>
    )
  }
}
//cette fonction permet de connecter un composant react au store
export default connect()(StepOne);