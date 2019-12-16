import React, { Component } from 'react';
import CommandeItem from './CommandeItem.jsx';

export default class CommandeList extends Component {
  constructor(props) {
    super(props);
    this.livrerCommande=this.livrerCommande.bind(this);
  }

  livrerCommande(id){
    this.props.livrerCommande(id);
  }
  
    render() {
        //let commandes = [{nom :'abdelhak',prenom : 'khalil',adresse :'adresse',typeTizza :'margaritta',taillePizza:'XL',saucePizza : 'sauce tomate',quantite : 2}];
        const trItem = this.props.data.map( (item,index) => <CommandeItem key={index} commande={item} livrerCommande={this.livrerCommande}/>)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }