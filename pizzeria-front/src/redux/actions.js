import * as types from './actionTypes';

export function saveCommande(commande) {
    return {
        type: types.SAVE_COMMANDE,
        payload: commande
    }

}
export function livrerCommande(id) {
    return {
        type: types.LIVRER_COMMANDE_REQUEST,
        payload: id
    }

}

export function detailCommande(commande) {
    return {
        type: types.DETAIL_COMMANDE_REQUEST,
        payload: commande
    }
}
export function fetchAllCommandesAction() {
    return {
        type: types.GET_COMMANDES_REQUEST,
    }
}