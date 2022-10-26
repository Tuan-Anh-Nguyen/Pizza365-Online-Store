import { FETCH_DRINKS, FETCH_DRINKS_ERROR, FETCH_DRINKS_PENDING, DRINK_SELECTED } from "../constants/DrinksActionTypes";

const initialState = {
     drinks: [],
     drinkSelected: '',
     pending: false,
     error: null
}

export default function drinksReducers(state = initialState, action) {
     switch (action.type) {
          case FETCH_DRINKS_PENDING:
               return {
                    ...state,
                    pending: true
               }
          case FETCH_DRINKS_ERROR:
               return {
                    ...state,
                    error: action.error,
                    pending: false
               }
          case FETCH_DRINKS:
               return {
                    ...state,
                    drinks: action.data,
                    pending: false
               }
          case DRINK_SELECTED:
               return {
                    ...state,
                    drinkSelected: action.payload
               }
          default:
               return state;
     }
}