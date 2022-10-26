import { useDispatch, useSelector } from 'react-redux';
import { PizzaBacon, PizzaHawaii, PizzaSeafood } from '../../actions/PizzaTypeAction';
import bacon from '../../assets/images/bacon.jpg';
import hawaii from '../../assets/images/hawaii.jpg';
import seafood from '../../assets/images/seafood.jpg';

function PizzaTypeComponent() {
     const dispatch = useDispatch();

     const { pizzaType } = useSelector((data) => data.pizzaTypeReducers);

     const onBtnSeafoodClick = () => {
          dispatch(PizzaSeafood());
          console.log(PizzaSeafood());
     }

     const onBtnHawaiiClick = () => {
          dispatch(PizzaHawaii());
          console.log(PizzaHawaii());
     }

     const onBtnBaconClick = () => {
          dispatch(PizzaBacon());
          console.log(PizzaBacon());
     }

     return (
          <>
               <div className='row' id='pizza-type'>
                    <div className='col-sm-12 text-center p-4 mt-4 text-warning'>
                         <h3><b className='p-2 border-bottom border-warning'>Chọn loại pizza</b></h3>
                    </div>
                    <div className='col-sm-12 mt-4'>
                         <div className='row'>
                              <div className='col-sm-4'>
                                   <div className='card'>
                                        <img src={seafood} alt='seafood img' className='card-img-top'></img>
                                        <div className='card-body'>
                                             <h4><b>OCEAN MANIA</b></h4>
                                             <h6>PIZZA HẢI SẢN SỐT MAYONNAISE</h6>
                                             <p>Sốt cà chua, Phô mai Mozzarella, Tôm, Mực, Thanh cua, Hành tây.</p>
                                        </div>
                                        <div className='card-footer'>
                                             <button className='btn w-100' style={{ backgroundColor: 'orange' }}
                                                  onClick={onBtnSeafoodClick}>Chọn</button>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-sm-4'>
                                   <div className='card'>
                                        <img src={hawaii} alt='hawaii img' className='card-img-top'></img>
                                        <div className='card-body'>
                                             <h4><b>HAWAIIAN</b></h4>
                                             <h6>PIZZA GIĂM BÔNG DỨA KIỂU HAWAII</h6>
                                             <p>Sốt cà chua, Phô mai Mozzarella, Thịt giăm bông, Dứa.</p>
                                        </div>
                                        <div className='card-footer'>
                                             <button className='btn w-100' style={{ backgroundColor: 'orange' }}
                                                  onClick={onBtnHawaiiClick}>Chọn</button>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-sm-4'>
                                   <div className='card'>
                                        <img src={bacon} alt='bacon img' className='card-img-top'></img>
                                        <div className='card-body'>
                                             <h4><b>CHEESY CHICKEN BACON</b></h4>
                                             <h6>PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI</h6>
                                             <p>Sốt phô mai, Phô mai Mozzarella, Thịt gà, Thịt heo muối, Cà chua.</p>
                                        </div>
                                        <div className='card-footer'>
                                             <button className='btn w-100' style={{ backgroundColor: 'orange' }}
                                                  onClick={onBtnBaconClick}>Chọn</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default PizzaTypeComponent;