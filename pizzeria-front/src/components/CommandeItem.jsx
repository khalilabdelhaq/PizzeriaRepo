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
        const {nomClient,prenomClient,adresse,tel,typePizza,taillePizza,saucePizza,quantite} = this.props.commande;
      return (
        <tr key={this.props.id}><td>{nomClient}</td><td>{prenomClient}</td><td>{adresse}</td><td>{tel}</td><td>{typePizza}</td><td>{taillePizza}</td><td>{saucePizza}</td><td>{quantite}</td><td><button onClick={this.livrerCommande}>Livrer</button></td></tr>
      );
    }
  }