import { PIZZA_TYPE_BACON, PIZZA_TYPE_HAWAII, PIZZA_TYPE_SEAFOOD } from "../constants/PizzaTypeActionTypes";

const initialState = {
     pizzaType: ""
}

export default function pizzaTypeReducers(state = initialState, action) {
     switch (action.type) {
          case PIZZA_TYPE_SEAFOOD:
               return {
                    ...state,
                    pizzaType: action.payload.pizzaType
               }
          case PIZZA_TYPE_HAWAII:
               return {
                    ...state,
                    pizzaType: action.payload.pizzaType
               }
          case PIZZA_TYPE_BACON:
               return {
                    ...state,
                    pizzaType: action.payload.pizzaType
               }
          default:
               return state;
     }
}