import {COUNT, COLOR, ADD_LIST, REMOVE_LIST, REFRESH} from '../actions/types';

const defaultState = {
    count: 1,
    color: '#4094a3',
    refresh: false,
    list: []
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case COUNT:
            return { ...state, count: state.count + 1 }
        case COLOR:
            return { ...state, color: action.data }
        case ADD_LIST:
            return { ...state, list: [...state.list].concat(action.data) }
        case REMOVE_LIST:
            return { ...state, list: action.data }
        case REFRESH:
            return { ...state, refresh: action.data }
        default:
            return state;
    }
}