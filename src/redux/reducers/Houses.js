 
import { GET_HOUSES } from '../actions/types';

const initialState = {
    houses: null,

};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_HOUSES:
            return {
                ...state,
                houses: action.payload,
            }
        default:
            return state;
    }
};