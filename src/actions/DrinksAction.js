import { FETCH_DRINKS, FETCH_DRINKS_ERROR, FETCH_DRINKS_PENDING, DRINK_SELECTED } from "../constants/DrinksActionTypes";

export const fetchAPIDrinks = () => async dispatch => {
     var requestOptions = {
          method: 'GET',
          redirect: 'follow'
     }
     await dispatch({
          type: FETCH_DRINKS_PENDING
     });
     try {
          const res = await fetch("http://203.171.20.210:8080/devcamp-pizza365/drinks", requestOptions);
          const data = await res.json();
          console.log(data);
          return dispatch({
               type: FETCH_DRINKS,
               data: data
          })
     }
     catch (err) {
          return dispatch({
               type: FETCH_DRINKS_ERROR,
               error: err
          })
     }
}

export function selectDrink(value) {
     return {
          type: DRINK_SELECTED,
          payload: value
     }
}