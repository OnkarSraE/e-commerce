import { combineReducers } from 'redux';
import { ADD_ITEM } from './actions';

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;