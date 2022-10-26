import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { pizzaSizeSmall, pizzaSizeMedium, pizzaSizeLarge } from '../../actions/PizzaSizeActions';

function PizzaSizeComponent() {
     const dispatch = useDispatch();

     const { menuName, duongKinh, suon, salad, nuocNgot, thanhTien } = useSelector((data) => data.pizzaSizeReducers);

     const onBtnSmallClick = () => {
          dispatch(pizzaSizeSmall());
          console.log(pizzaSizeSmall());
     }

     const onBtnMediumClick = () => {
          dispatch(pizzaSizeMedium());
          console.log(pizzaSizeMedium());
     }

     const onBtnLargeClick = () => {
          dispatch(pizzaSizeLarge());
          console.log(pizzaSizeMedium());
     }

     return (
          <>
               <div className='row' id='menu-combo'>
                    <div className='col-sm-12 text-center text-warning p-4 mt-4'>
                         <h3><b className='p-2 border-bottom border-warning'>Chọn size pizza</b></h3>
                         <p className='p-2'>Chọn size pizza phù hợp với nhu cầu của bạn</p>
                    </div>
                    <div className='col-sm-12'>
                         <div className='row'>
                              <div className='col-sm-4'>
                                   <div className='card'>
                                        <div className='card-header text-center' style={{ backgroundColor: 'orange' }}>
                                             <h4>Small</h4>
                                        </div>
                                        <div className='card-body text-center'>
                                             <ul className='list-group list-group-flush'>
                                                  <li className='list-group-item'>Đường kính: <b>20cm</b></li>
                                                  <li className='list-group-item'>Sườn nướng: <b>2</b></li>
                                                  <li className='list-group-item'>Salad: <b>200gr</b></li>
                                                  <li className='list-group-item'>Nước ngọt: <b>2</b></li>
                                                  <li className='list-group-item'><h2><b>150.000</b></h2>VNĐ</li>
                                             </ul>
                                        </div>
                                        <div className='card-footer text-center'>
                                             <Button className='btn w-100' style={{ backgroundColor: 'orange', color: '#000' }}
                                                  onClick={onBtnSmallClick}>Chọn</Button>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-sm-4'>
                                   <div className='card'>
                                        <div className='card-header text-center bg-warning'>
                                             <h4>Medium</h4>
                                        </div>
                                        <div className='card-body text-center'>
                                             <ul className='list-group list-group-flush'>
                                                  <li className='list-group-item'>Đường kính: <b>25cm</b></li>
                                                  <li className='list-group-item'>Sườn nướng: <b>4</b></li>
                                                  <li className='list-group-item'>Salad: <b>300gr</b></li>
                                                  <li className='list-group-item'>Nước ngọt: <b>3</b></li>
                                                  <li className='list-group-item'><h2><b>200.000</b></h2>VNĐ</li>
                                             </ul>
                                        </div>
                                        <div className='card-footer text-center'>
                                             <Button className='btn w-100' style={{ backgroundColor: 'orange', color: '#000' }}
                                                  onClick={onBtnMediumClick}>Chọn</Button>
                                        </div>
                                   </div>
                              </div>
                              <div className='col-sm-4'>
                                   <div className='card'>
                                        <div className='card-header text-center' style={{ backgroundColor: 'orange' }}>
                                             <h4>Large</h4>
                                        </div>
                                        <div className='card-body text-center'>
                                             <ul className='list-group list-group-flush'>
                                                  <li className='list-group-item'>Đường kính: <b>30cm</b></li>
                                                  <li className='list-group-item'>Sườn nướng: <b>8</b></li>
                                                  <li className='list-group-item'>Salad: <b>500gr</b></li>
                                                  <li className='list-group-item'>Nước ngọt: <b>4</b></li>
                                                  <li className='list-group-item'><h2><b>250.000</b></h2>VNĐ</li>
                                             </ul>
                                        </div>
                                        <div className='card-footer text-center'>
                                             <Button className='btn w-100' style={{ backgroundColor: 'orange', color: '#000' }}
                                                  onClick={onBtnLargeClick}>Chọn</Button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default PizzaSizeComponent;