import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function DetailModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="next" type="button" onClick={handleOpen}>
       Détails
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
        <h2>Informations Personelles</h2>
        <table className="InfoPerso">
          <tr>
            <td>Nom</td><td>{props.commande.nomClient}</td>
          </tr>
          <tr>
            <td>Prénom</td><td>{props.commande.prenomClient}</td>
          </tr>
          <tr>
            <td>Adresse</td><td>{props.commande.adresse}</td>
          </tr>
        </table>
        <h2>Détails Commande</h2>
        <table className="InfoPerso">
          <tr>
            <td>Type</td><td>{props.commande.typePizza}</td>
          </tr>
          <tr>
            <td>Sauce</td><td>{props.commande.saucePizza}</td>
          </tr>
          <tr>
            <td>Taille</td><td>{props.commande.taillePizza}</td>
          </tr>
          <tr>
            <td>Quantite</td><td>{props.commande.quantite}</td>
          </tr>
        </table>
        </div>
      </Modal>
    </div>
  );
}
