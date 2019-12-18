import {call, put, } from 'redux-saga/effects';
import * as types from './actionTypes';

const ROOT_URL = "http://localhost:8080/";
const getApi =(url) => fetch(url,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(response => response.json());

const postApi = (url,body) => fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  }).then(response => response.json());

  const putApi = (url) => fetch(url,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }).then(response => response.json());

 export function* fetchCommandes(action) {
    try{
        console.log('saga')
        const data = yield call(getApi,`${ROOT_URL}undeliveredOrders`)
        yield put({type : types.FETCH_DATA_SUCCESS , data : data})
    }
    catch (e){
        console.log(e)
    }
}

export function* saveCommande(action) {
    try{
        console.log(action.payload)
        const data = yield call(postApi,`${ROOT_URL}orders`,action.payload)
        yield put({type : types.POST_DATA_SUCCESS , data : data})
    }
    catch (e){
        console.log(e)
    }
}
export function* livrerCommande(action) {
    try{
        console.log(action.payload)
        const id=action.payload;
        const data = yield call(putApi,`${ROOT_URL}orders/${id}`)
        yield put({type : types.PUT_DATA_SUCCESS , data : id})
    }
    catch (e){
        console.log(e)
    }
}