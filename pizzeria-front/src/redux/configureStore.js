import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import * as types from './actionTypes';
import mySaga from './rootSaga';

const data = [
  {
    nomClient: 'abdelhak',
    prenomClient: 'khalil',
    adresse: 'adresse',
    typePizza: 'margaritta',
    taillePizza: 'XL',
    saucePizza: 'saucee tomate',
    quantite: 2,
    dateCommande: '12-12/2019'
  },
  {
    nomClient: 'labi',
    prenomClient: 'rachid',
    adresse: 'lot warda rue',
    typePizza: '4 saison',
    taillePizza: 'XL',
    saucePizza: 'sauce tomate',
    quantite: 4,
    dateCommande: "12/12/2019"
  }
];
const detailCommande = {
  nomClient: '',
  prenomClient: '',
  adresse: '',
  typePizza: '',
  taillePizza: '',
  saucePizza: '',
  quantite: 0
};
const initialState = {
  listCommande: data,
  detailCommande: detailCommande
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SUBMIT_FORM:
      return state;
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state, listCommande: action.data
      }
    case types.POST_DATA_SUCCESS:
      const newListCommande = [...state.listCommande];
      newListCommande.push(action.data);
      return {
        ...state,
        listCommande: newListCommande,
      }

    case types.PUT_DATA_SUCCESS:
      const newListCommand = state.listCommande.filter(x => x.id !== action.data);
      return {
        ...state,
        listCommande: newListCommand,
      }
    case types.DETAIL_COMMANDE_REQUEST:
      const detailC = action.payload;
      return {
        ...state,
        detailCommande: detailC
      }
    default:
      return state;
  }
}
const configureStore = () => {
  const sagaMiddelware = createSagaMiddleware()
  //On applique notre middelware au store
  const store = createStore(reducer, applyMiddleware(sagaMiddelware));
  sagaMiddelware.run(mySaga)
  return store;
}
export default configureStore;
