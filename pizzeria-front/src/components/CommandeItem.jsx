import React, { Component } from 'react';
import DetailModal from './DetailModal';


export default class CommandeItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false }
    this.livrerCommande = this.livrerCommande.bind(this);
    this.detailCommande = this.detailCommande.bind(this);
  }
  livrerCommande() {
    const { id } = this.props.commande;
    this.props.livrerCommande(id);
  }
  detailCommande() {
    this.props.detailCommande(this.props.commande);
  }
  render() {
    const { nomClient, prenomClient, adresse, tel, typePizza, taillePizza, saucePizza, quantite, dateOrder } = this.props.commande;
    return (
      <tr><td>{nomClient}</td><td>{prenomClient}</td><td>{adresse}</td><td>{tel}</td><td>{typePizza}</td><td>{taillePizza}</td><td>{saucePizza}</td><td>{quantite}</td><td>{dateOrder}</td><td><button className="previous" onClick={this.livrerCommande}>Livrer</button><DetailModal commande={this.props.commande}/></td></tr>
    );
  }
}