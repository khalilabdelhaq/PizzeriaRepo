import React, { Component } from 'react';
import CommandeList from './CommandeList';
import { connect } from "react-redux";

class CommandeTable extends Component {
  constructor(props) {
    super(props);
  }

  livrerCommande(){

  }
  
    render() {
        
      return (
        <table className="table table-hover">
        <thead className="thead-dark"><tr><th>Nom</th><th>Prenom</th><th>Adresse</th><th>Tél</th><th>Type Pizza</th><th>Taille</th><th>Sauce</th><th>Quantité</th><th>Date Commande</th><th>Edit/Save</th></tr></thead>
        <CommandeList data={this.props.data}/>
        </table>
      );
    }
  }
  const mapStateToProps =(state) => ({
    data : state.listCommande,
  });
  //cette fonction permet de connecter un composant react au store
  export default connect(mapStateToProps)(CommandeTable);