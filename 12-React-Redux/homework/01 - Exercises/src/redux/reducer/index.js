import {ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME} from '../actions/types';

const initialState = {
   list: [],
   StoreName:    ''
};

const rootReducer = (state=initialState, {type, payload}) => {
    switch (state){
        case 'ADD_PRODUCT':
            return{
                ...state,
                list: [...state.list, payload]
            }

        case 'DELETE_PRODUCT':
            const filter = state.list.filter(element => element.id !==payload);
            return{
                ...state,
                list: filter
            }

        case 'GET_STORE_NAME':
            return{
                ...state,
                StoreName:payload
            }
        
        default:
            return state;
    }
};

export default rootReducer;
