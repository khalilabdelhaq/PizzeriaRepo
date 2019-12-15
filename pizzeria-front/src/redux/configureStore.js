import { createStore } from "redux";
import * as types from './actionTypes';

const data =[
  {nom :'abdelhak',
  prenom : 'khalilo',
  adresse :'adresse',
  typeTizza :'margaritta',
  taillePizza:'XL',
  saucePizza : 'sauce tomate',
  quantite : 2,
  dateCommande :'12-12/2019'},
  {nom :'labi',
  prenom : 'rachid',
  adresse :'lot warda rue',
  typeTizza :'4 saison',
  taillePizza:'XL',
  saucePizza : 'sauce tomate',
  quantite : 4,
  dateCommande : "12/12/2019"}
];
const initialState = {
  page : 1,
  commandeToAdd :{
  nom : 'khalill',
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
      const { name, value } = event.target;
      stateCopy= {
        ...state,
        commandeToAdd : {
          ...state.commandeToAdd,
          name : value
        }
      }
      console.log(stateCopy.commandeToAdd);
      return stateCopy;
        default :
        return state;
    }
  }
  const configureStore = () =>{
    const store = createStore(reducer);
    return store;
}
export default configureStore;
  