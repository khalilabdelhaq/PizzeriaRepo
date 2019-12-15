import React, { Component } from 'react';
import CommandeList from './CommandeList';

export default class CommandeTable extends Component {

  livrerCommande(){

  }
  
    render() {
        
      return (
        <table className="table table-hover">
        <thead className="thead-dark"><tr><th>Nom</th><th>Prenom</th><th>Adresse</th><th>Tél</th><th>Type Pizza</th><th>Sauce</th><th>Quantité</th><th>Date Commande</th><th>Edit/Save</th></tr></thead>
        <CommandeList />
        </table>
      );
    }
  }