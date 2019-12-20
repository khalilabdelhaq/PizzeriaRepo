import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'


class FormWizard extends Component {
  constructor(props) {
    super(props);
  }
  schema = () => {
    const schema = Yup.object().shape({
      nomClient: Yup.string().required('Veuillez renseigner votre nom.'),
      prenomClient: Yup.string().required('Veuillez renseigner votre prénom.'),
      adresse: Yup.string().required('Veuillez renseigner l\'adresse.'),
      tel: Yup.number().typeError("Vérifier format Tél.").required('Veuillez renseigner numéro Tél.'),
      typePizza: Yup.string().required('Veuillez renseigner type pizza.'),
      taillePizza: Yup.string().required('Veuillez renseigner taille pizza.'),
      saucePizza: Yup.string().required('Veuillez renseigner sauce pizza.'),
      quantite: Yup.number().positive("la quantité doit être positive").required('Veuillez renseigner quantité.'),
    });
    return schema;
  };
  state = {
    page: 1
  };
  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

  previousPage = () => this.setState(state => ({ page: state.page - 1 }));

  submitForm = (values) => {
    //const { history } = this.props;
    //this.history.push('/')
    this.props.dispatch({ type: "SAVE_COMMANDE_REQUEST", payload: values });
  }

  render() {

    return (
      <fieldset>
        <legend>Commande de pizza</legend>
        <Formik
          initialValues={{
            nomClient: '',
            prenomClient: '',
            adresse: '',
            tel: '',
            typePizza: '',
            taillePizza: '',
            saucePizza: '',
            quantite: '1'
          }}
          onSubmit={this.submitForm}
          validationSchema={this.schema}
        >
          {() => (
            <Form style={{ display: "flex" }}>
              {this.state.page === 1 && <StepOne suivant={this.nextPage} />}
              {this.state.page === 2 &&
                <StepTwo previousPage={this.previousPage}
                  submitForm={this.submitForm} />}
            </Form>
          )}
        </Formik>
      </fieldset>
    );
  }
}


//cette fonction permet de selectionner juste les donnée utilisé par le composant connecté
const mapStateToProps = (state) => ({
  commande: state.commandeToAdd,
  page: state.page
});
//cette fonction permet de connecter un composant react au store
export default connect(mapStateToProps)(FormWizard);
