import React, { Component } from 'react';
import CommandeList from './CommandeList';
import { connect } from "react-redux";
import { fetchAllCommandesAction, livrerCommande, detailCommande } from '../redux/actions'


class CommandeTable extends Component {
  constructor(props) {
    super(props);
    this.livrerCommande = this.livrerCommande.bind(this);
    this.detailCommande = this.detailCommande.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllCommandes();
  }

  livrerCommande(id) {
    console.log(id);
    this.props.livrerCommande(id);
  }

  detailCommande(commande) {
    console.log(commande);
    this.props.detailCommande(commande);
  }
  render() {

    return (
      <table className="table table-hover">
        <thead className="thead-dark"><tr><th>Nom</th><th>Prenom</th><th>Adresse</th><th>Tél</th><th>Type Pizza</th><th>Taille</th><th>Sauce</th><th>Quantité</th><th>Date commande</th><th>Livrer</th></tr></thead>
        <CommandeList detailCommande={this.detailCommande} livrerCommande={this.livrerCommande} data={this.props.data} />
      </table>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllCommandes: () => dispatch(fetchAllCommandesAction()),
  livrerCommande: (id) => dispatch(livrerCommande(id)),
  detailCommande: (id) => dispatch(detailCommande(id))
});

const mapStateToProps = (state) => ({
  data: state.listCommande,
});
//cette fonction permet de connecter un composant react au store
export default connect(mapStateToProps, mapDispatchToProps)(CommandeTable);