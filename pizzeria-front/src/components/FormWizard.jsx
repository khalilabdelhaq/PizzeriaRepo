import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { connect } from "react-redux";

class FormWizard extends Component {
    constructor(props) {
      super(props);
      this.nextPage = this.nextPage.bind(this);
      this.previousPage = this.previousPage.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
     
    }
    nextPage() {
        event.preventDefault();
        var form = document.getElementById("stepForm");
        var isValidForm = form.checkValidity();
        if(isValidForm){
          this.props.dispatch({ type : "NEXT_PAGE"});
        }
    }
    handleInputChange(event){
      event.preventDefault();
      const { name, value } = event.target;
      console.log(event.target.value);
      this.props.dispatch({ type : "INPUT_CHANGE",input : {name,value}});
    }
    previousPage() {
      event.preventDefault();
        this.props.dispatch({ type : "PREVIOUS_PAGE"});
    }

    submitForm() {
      console.log(this.props.commande);
      this.props.dispatch({ type : "SAVE_COMMANDE_REQUEST",payload :this.props.commande});
    }
  
    render() {

      return (
      <fieldset>
      <legend>Commande de pizza</legend>
          {this.props.page === 1 && <StepOne handleInputChange ={this.handleInputChange} commande={this.props.commande} suivant={this.nextPage}/>}
          {this.props.page === 2 &&
            <StepTwo commande={this.props.commande} handleInputChange ={this.handleInputChange} previousPage={this.previousPage}
            submitForm={this.submitForm} /> }
      </fieldset>
      );
    }
  }
  
  
  //cette fonction permet de selectionner juste les donnée utilisé par le composant connecté
  const mapStateToProps =(state) => ({
    commande : state.commandeToAdd,
    page : state.page
  });
  //cette fonction permet de connecter un composant react au store
  export default connect(mapStateToProps)(FormWizard);
  