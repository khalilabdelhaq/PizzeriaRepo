import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { connect } from "react-redux";

class FormWizard extends Component {
    constructor(props) {
      super(props);
      this.nextPage = this.nextPage.bind(this);
      this.previousPage = this.previousPage.bind(this);
      this.state = {
        page: 1,
      };
    }
    nextPage() {
        this.props.dispatch({ type : "NEXT_PAGE"});
    }
  
    previousPage() {
        this.props.dispatch({ type : "PREVIOUS_PAGE"});
    }
    submitForm() {
        this.props.dispatch({ type : "SUBMIT_FORM"});
    }
  
    render() {

      return (
      <fieldset>
      <legend>Commande de pizza</legend>
          {this.props.page === 1 && <StepOne suivant={this.nextPage}/>}
          {this.props.page === 2 &&
            <StepTwo previousPage={this.previousPage}
            onSubmit={this.nextPage} /> }
      </fieldset>
      );
    }
  }
  
  
  //cette fonction permet de selectionner juste les donnée utilisé par le composant connecté
  const mapStateToProps =(state) => ({
    page : state.page,
  });
  //cette fonction permet de connecter un composant react au store
  export default connect(mapStateToProps)(FormWizard);
  