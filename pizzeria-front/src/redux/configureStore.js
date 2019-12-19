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
  page: 1,
  commandeToAdd: {
    nomClient: '',
    prenomClient: '',
    adresse: '',
    tel: '',
    typePizza: '',
    taillePizza: '',
    saucePizza: '',
    quantite: '1'
  }
  ,
  listCommande: data,
  detailCommande: detailCommande
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case types.NEXT_PAGE:
      let stateCopy = { ...state };
      stateCopy.page++;
      return stateCopy;
    case types.PREVIOUS_PAGE:
      stateCopy = { ...state };
      stateCopy.page--;
      return stateCopy;
    case types.SUBMIT_FORM:
      return state;
    case types.INPUT_CHANGE:
      const { name, value } = action.input;
      const newCommand = { ...state.commandeToAdd };
      newCommand[name] = value;
      stateCopy = {
        page: state.page,
        commandeToAdd: newCommand,
        listCommande: state.listCommande,
        detailCommande: state.detailCommande
      }
      return stateCopy;
    case types.FETCH_DATA_SUCCESS:
      stateCopy = {
        ...state, listCommande: action.data
      }
      return stateCopy;
    case types.POST_DATA_SUCCESS:
      const newListCommande = [...state.listCommande];
      newListCommande.push(action.data),
        stateCopy = {
          page: 1,
          commandeToAdd: initialState.commandeToAdd,
          listCommande: newListCommande,
          detailCommande: state.detailCommande
        }
      return stateCopy;

    case types.PUT_DATA_SUCCESS:
      const newListCommand = state.listCommande.filter(x => x.id !== action.data);
      stateCopy = {
        page: state.page,
        commandeToAdd: state.commandeToAdd,
        listCommande: newListCommand,
        detailCommande: state.detailCommande
      }
      return stateCopy;
    case types.DETAIL_COMMANDE_REQUEST:
      const detailC = action.payload;
      stateCopy = {
        page: state.page,
        commandeToAdd: state.commandeToAdd,
        listCommande: state.listCommande,
        detailCommande: detailC
      }
      return stateCopy;
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
