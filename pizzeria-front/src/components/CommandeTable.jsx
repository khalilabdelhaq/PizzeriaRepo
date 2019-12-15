import React, { Component } from 'react';
import CommandeList from './CommandeList';
import { connect } from "react-redux";
import {fetchAllCommandesAction} from '../redux/actions'

class CommandeTable extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.fetchAllCommandes();
  }

  livrerCommande(){

  }
  
    render() {
        
      return (
        <table className="table table-hover">
        <thead className="thead-dark"><tr><th>Nom</th><th>Prenom</th><th>Adresse</th><th>Tél</th><th>Type Pizza</th><th>Taille</th><th>Sauce</th><th>Quantité</th><th>Edit/Save</th></tr></thead>
        <CommandeList data={this.props.data}/>
        </table>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    fetchAllCommandes: () => dispatch(fetchAllCommandesAction())
  });
  
  const mapStateToProps =(state) => ({
    data : state.listCommande,
  });
  //cette fonction permet de connecter un composant react au store
  export default connect(mapStateToProps,mapDispatchToProps)(CommandeTable);