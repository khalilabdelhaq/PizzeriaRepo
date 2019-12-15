import { createStore,applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import * as types from './actionTypes';
import mySaga from './sagas';

const data =[
  {
  nomClient :'abdelhak',
  prenomClient : 'khalil',
  adresse :'adresse',
  typePizza :'margaritta',
  taillePizza:'XL',
  saucePizza : 'sauce tomate',
  quantite : 2,
  dateCommande :'12-12/2019'},
  {nomClient :'labi',
  prenomClient : 'rachid',
  adresse :'lot warda rue',
  typePizza :'4 saison',
  taillePizza:'XL',
  saucePizza : 'sauce tomate',
  quantite : 4,
  dateCommande : "12/12/2019"}
];
const initialState = {
  page : 1,
  commandeToAdd :{
  nom : '',
  prenom : '',
  adresse : '',
  tel : '',
  typePizza : '',
  taillePizza : '',
  saucePizza : ''
  }
  ,
  listCommande : data
}
  function reducer(state=initialState,action){
    switch(action.type){
      case types.NEXT_PAGE :
      console.log('doSomething');
       let stateCopy = {...state};
       stateCopy.page++;
      return stateCopy;
      case types.PREVIOUS_PAGE :
      stateCopy = {...state};
      stateCopy.page--;
      return stateCopy;
      case types.SUBMIT_FORM :
      console.log(state);
      return state;
      case types.INPUT_CHANGE :
      const { name, value } = action.input;
      const newCommand = {...state.commandeToAdd};
      newCommand[name]=value;
      stateCopy={
        page : state.page,
        commandeToAdd : newCommand,
        listCommande : state.listCommande
      }
      return stateCopy;
      case types.FETCH_DATA_SUCCESS : 
      console.log(action.data);
      stateCopy={
        ...state,listCommande:action.data
      }
      return stateCopy;
        default :
        return state;
    }
  }
  const configureStore = () =>{
    const sagaMiddelware=createSagaMiddleware()
    const store = createStore(reducer,applyMiddleware(sagaMiddelware));
    sagaMiddelware.run(mySaga)
    return store;
}
export default configureStore;
  