
import { takeLatest,all } from "redux-saga/effects";
import * as types from './actionTypes';
import { fetchCommandes, saveCommande} from "./sagas";

export default function* mySaga(){
  yield all ([
     takeLatest(types.GET_COMMANDES_REQUEST, fetchCommandes),
     takeLatest(types.SAVE_COMMANDE_REQUEST, saveCommande),
  ])
}