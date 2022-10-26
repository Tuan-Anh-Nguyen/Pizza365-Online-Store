import { PIZZA_TYPE_BACON, PIZZA_TYPE_HAWAII, PIZZA_TYPE_SEAFOOD } from "../constants/PizzaTypeActionTypes";

export function PizzaSeafood() {
     return {
          type: PIZZA_TYPE_SEAFOOD,
          payload: {
               pizzaType: "Pizza Hải Sản"
          }
     }
}

export function PizzaHawaii() {
     return {
          type: PIZZA_TYPE_HAWAII,
          payload: {
               pizzaType: "Pizza Hawaii"
          }
     }
}

export function PizzaBacon() {
     return {
          type: PIZZA_TYPE_BACON,
          payload: {
               pizzaType: "Pizza Thịt Xông Khói"
          }
     }
}