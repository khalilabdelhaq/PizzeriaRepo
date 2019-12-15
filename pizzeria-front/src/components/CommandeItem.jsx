import React, { Component } from 'react';


export default class CommandeItem extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.livrerCommande = this.livrerCommande.bind(this);
  }
  livrerCommande()
  {
    const {id} = this.props.commande;
    this.props.livrerCommande(id);
  }
    render() {
        const {nom,prenom,adresse,tel,typeTizza,taillePizza,saucePizza,quantite,dateCommande} = this.props.commande;
      return (
        <tr key={this.props.id}><td>{nom}</td><td>{prenom}</td><td>{adresse}</td><td>{tel}</td><td>{typeTizza}</td><td>{taillePizza}</td><td>{saucePizza}</td><td>{quantite}</td><td>{dateCommande}</td><td><button onClick={this.livrerCommande}>Livrer</button></td></tr>
      );
    }
  }