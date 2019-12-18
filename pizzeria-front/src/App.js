import React, { Component } from 'react';
import './App.css';
import FormWizard from './components/FormWizard';
import CommandeTable from './components/CommandeTable';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {nextPage,previousPage,saveCommande,livrerCommande} from './redux/actions'
import DetailComponent from './components/DetailComponent';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavBarPage from './components/NavBarPage.jsx';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
render(){
  return (

    <Router>
    <div>
   <NavBarPage title="Gestion des Commandes"/>
   <Switch>
     <Route exact path="/nouveau">
     <FormWizard nextPage={this.nextPage} previousPage={this.previousPage} saveCommande={this.saveCommande}/>
     </Route>
     <Route exact path="/">
     <CommandeTable livrerCommande={this.livrerCommande}/>
      <DetailComponent />
     </Route>
   </Switch>
  </div>
  </Router>
  );
}
}
const mapStateToProps = (state) => {
  return {
    commande : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    nextPage:nextPage,
    previousPage:previousPage,
    saveCommande:saveCommande,
    livrerCommande : livrerCommande
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

