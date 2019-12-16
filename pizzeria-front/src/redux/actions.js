import * as types from './actionTypes';

export function nextPage()
{
    return {
    type: types.NEXT_PAGE,
    }
}

export function previousPage()
{
    return {
    type: types.PREVIOUS_PAGE,
    }
}

export function saveCommande(commande)
{
    return {
        type: types.SAVE_COMMANDE,
        payload:commande
        }

}
export function livrerCommande(id)
{
    return {
        type: types.LIVRER_COMMANDE_REQUEST,
        payload:id
        }

}
export function fetchAllCommandesAction(){
    return {
        type: types.GET_COMMANDES_REQUEST,
        }
}