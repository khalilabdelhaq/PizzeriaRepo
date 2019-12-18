import React, { Component } from 'react';
import { connect } from "react-redux";
class DetailComponent extends Component {
  constructor(props) {
    super(props);
  }

  
    render() {
      return (
         
             <fieldset>
            <legend>détail de la commande</legend>
            <h2>Info Perso</h2>
            <table className="InfoPerso">
            <tr>
            <td>Nom</td><td>{this.props.data.nomClient}</td>
            </tr>
            <tr>
            <td>Prénom</td><td>{this.props.data.prenomClient}</td> 
            </tr>
            <tr>
            <td>Adresse</td><td>{this.props.data.adresse}</td>      
            </tr>    
            </table>
            <h2>Commande</h2>
            <table className="InfoPerso">
            <tr>
            <td>Type</td><td>{this.props.data.typePizza}</td>
            </tr>
            <tr>
            <td>Sauce</td><td>{this.props.data.saucePizza}</td> 
            </tr>
            <tr>
            <td>Taille</td><td>{this.props.data.taillePizza}</td>      
            </tr>    
            <tr>
            <td>Quantite</td><td>{this.props.data.quantite}</td>      
            </tr> 
            </table>
            </fieldset>
            
      );
    }
  }
  const mapStateToProps =(state) => ({
    data : state.detailCommande,
  });
  //cette fonction permet de connecter un composant react au store
  export default connect(mapStateToProps)(DetailComponent);