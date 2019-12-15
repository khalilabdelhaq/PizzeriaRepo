import {call,takeLatest, put, } from 'redux-saga/effects';
import * as types from './actionTypes';


const api =(url) => fetch(url).then(response => response.json())

 function* fetchCommandes(action) {
    try{
        const data = yield call(api,'http://localhost:8080/pizzaCommande')
        yield put({type : types.FETCH_DATA_SUCCESS , data : data})
    }
    catch (e){
        console.log(e)
    }
}
export default function* mySaga(){
    yield takeLatest(types.GET_COMMANDES_REQUEST,fetchCommandes)
}