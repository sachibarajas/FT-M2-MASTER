import {GET_STORE_NAME, ADD_PRODUCT, DELETE_PRODUCT} from './types';
import axios from 'axios'
export function addProduct(product) {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}

export function deleteProduct(id){
    return{
        type: DELETE_PRODUCT,
        payload: id
    }
}

export function getStoreName(){
    return function (dispatch){
        axios.get('http://localhost:3001/store')
        .then(response=>response.data.name)
        .then(data => dispatch({
            type: GET_STORE_NAME,
            payload: data
        }))
    }
}