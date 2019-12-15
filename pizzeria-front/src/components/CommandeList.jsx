import React, { Component } from 'react';
import CommandeItem from './CommandeItem.jsx';

export default class CommandeList extends Component {

  livrerCommande(){

  }
  
    render() {
        let commandes = [{nom :'abdelhak',prenom : 'khalil',adresse :'adresse',typeTizza :'margaritta',taillePizza:'XL',saucePizza : 'sauce tomate',quantite : 2}];
        const trItem = commandes.map( (item,index) => <CommandeItem key={index} commande={item} livrerCommande={this.props.livrerCommande}/>)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }