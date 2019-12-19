
import { takeLatest, all } from "redux-saga/effects";
import * as types from './actionTypes';
import { fetchCommandes, saveCommande, livrerCommande } from "./sagas";

export default function* mySaga() {
  //Saga watcher 
  yield all([
    takeLatest(types.GET_COMMANDES_REQUEST, fetchCommandes),
    takeLatest(types.SAVE_COMMANDE_REQUEST, saveCommande),
    takeLatest(types.LIVRER_COMMANDE_REQUEST, livrerCommande),
  ])
}