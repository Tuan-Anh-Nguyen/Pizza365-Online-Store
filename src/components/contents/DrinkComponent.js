import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPIDrinks, selectDrink } from "../../actions/DrinksAction";

function DrinkComponent() {
     const dispatch = useDispatch();

     const { drinks, drinkSelected } = useSelector((data) => data.drinksReducers);

     useEffect(() => {
          dispatch(fetchAPIDrinks());
     }, [])

     const handleChange = (event) => {
          dispatch(selectDrink(event.target.value));
          console.log(event.target.value);
     }

     return (
          <>
               <div className='row'>
                    <div className='col-sm-12 text-center p-4 mt-4 text-warning'>
                         <h3><b className='p-2 border-bottom border-warning'>Chọn đồ uống</b></h3>
                    </div>
                    <div className='col-sm-12 mt-4'>
                         <FormControl fullWidth>
                              <InputLabel>-- Chọn đồ uống yêu thích của bạn --</InputLabel>
                              <Select
                                   value={drinkSelected}
                                   label="-- Chọn đồ uống yêu thích của bạn --"
                                   onChange={handleChange}
                              >
                                   {drinks.map((drink, index) => {
                                        return <MenuItem key={index} value={drink.maNuocUong}>{drink.tenNuocUong}</MenuItem>
                                   })}
                              </Select>
                         </FormControl>
                    </div>
               </div>
          </>
     )
}

export default DrinkComponent;