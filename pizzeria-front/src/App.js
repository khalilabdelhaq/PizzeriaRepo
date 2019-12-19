import React, { Component } from 'react';
import './App.css';
import FormWizard from './components/FormWizard';
import CommandeTable from './components/CommandeTable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextPage, previousPage, saveCommande, livrerCommande } from './redux/actions'
import DetailComponent from './components/DetailComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBarPage from './components/NavBarPage.jsx';
import { Container } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <NavBarPage title="Gestion des Commandes" />
          <Container>
            <Switch>
              <Route exact path="/nouveau">
                <FormWizard />
              </Route>
              <Route exact path="/">
                <CommandeTable livrerCommande={this.livrerCommande} />
                <DetailComponent />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    commande: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    livrerCommande: livrerCommande
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

