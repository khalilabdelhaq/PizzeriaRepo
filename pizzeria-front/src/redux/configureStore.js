import { createStore } from "redux";


const initialState = {
  page : 1,
  nom : 'khalil',
  prenom : '',
  adresse : '',
  tel : '',
  typeTizza : '',
  taillePizza : '',
  saucePizza : ''
}
  function reducer(state=initialState,action){
    switch(action.type){
      case "NEXT_PAGE" :
      console.log('doSomething');
       let stateCopy = {...state};
       stateCopy.page++;
      return stateCopy;
      case "PREVIOUS_PAGE" :
      stateCopy = {...state};
      stateCopy.page--;
      return stateCopy;
      case "SUBMIT_FORM" :
      console.log(state);
      return state;
        default :
        return state;
    }
  }
  const configureStore = () =>{
    const store = createStore(reducer);
    return store;
}
export default configureStore;
  