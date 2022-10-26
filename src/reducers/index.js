import { combineReducers } from "redux";
import pizzaSizeReducers from "./PizzaSizeReducers";
import drinksReducers from "./DrinksReducers";
import pizzaTypeReducers from "./PizzaTypeReducers";
import formReducers from "./FormReducers";

const rootReducers = combineReducers({
     pizzaSizeReducers,
     drinksReducers,
     pizzaTypeReducers,
     formReducers
})

export default rootReducers;