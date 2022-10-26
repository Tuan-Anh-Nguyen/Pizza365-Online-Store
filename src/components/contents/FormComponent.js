import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
     addressChange,
     emailChange,
     fullnameChange,
     messageChange,
     phoneChange,
     voucherChange
} from "../../actions/FormAction";
import ConfirmOrderModal from "./ConfirmOrderModal";

function FormComponent() {
     const dispatch = useDispatch();

     const { hoTen, email, soDienThoai, diaChi, voucher, loiNhan } = useSelector((data) => data.formReducers);
     const { menuName, thanhTien } = useSelector((data) => data.pizzaSizeReducers);
     const { pizzaType } = useSelector((data) => data.pizzaTypeReducers);
     const { drinkSelected } = useSelector((data) => data.drinksReducers);

     const [alert, setAlert] = useState(false);
     const [textAlert, setTextAlert] = useState('');
     const [alertColor, setAlertColor] = useState('');

     const [confirmModal, setConfirmModal] = useState(false);
     const [orderInfo, setOrderInfo] = useState("");

     const closeConfirmModal = () => {
          setConfirmModal(false);
     }

     const fetchAPIVoucher = async (url) => {
          const res = await fetch(url);
          const data = await res.json();
          return data;
     }

     const handleCloseAlert = () => {
          setAlert(false);
     }

     const inputFullnameChange = (event) => {
          dispatch(fullnameChange(event.target.value));
     }

     const inputEmailChange = (event) => {
          dispatch(emailChange(event.target.value));
     }

     const inputPhoneChange = (event) => {
          dispatch(phoneChange(event.target.value));
     }

     const inputAddressChange = (event) => {
          dispatch(addressChange(event.target.value));
     }

     const inputVoucherChange = (event) => {
          dispatch(voucherChange(event.target.value));
     }

     const inputMessageChange = (event) => {
          dispatch(messageChange(event.target.value));
     }

     const onBtnSendClick = () => {
          var formData = {
               menuName: menuName,
               pizzaType: pizzaType,
               drink: drinkSelected,
               hoTen: hoTen,
               email: email,
               soDienThoai: soDienThoai,
               diaChi: diaChi,
               voucher: voucher,
               discountPercent: 0,
               loiNhan: loiNhan,
               thanhTien: thanhTien,
               priceActual: 0
          }
          var validateData = validateFormData(formData);
          if (validateData) {
               if (formData.voucher !== "") {
                    fetchAPIVoucher("http://203.171.20.210:8080/devcamp-pizza365/voucher_detail/" + formData.voucher)
                         .then((data) => {
                              console.log(data);
                              formData.discountPercent = data.phanTramGiamGia;
                              formData.priceActual = formData.thanhTien * (1 - formData.discountPercent / 100);
                              console.log(formData);
                              setAlert(true);
                              setTextAlert("Your information is all correct!");
                              setAlertColor("success");
                              setConfirmModal(true);
                              setOrderInfo(formData);
                         })
                         .catch((err) => console.log(err.message));
               } else {
                    formData.discountPercent = 0;
                    formData.priceActual = formData.thanhTien * (1 - formData.discountPercent / 100);
                    console.log(formData);
                    setAlert(true);
                    setTextAlert("Your information is all correct!");
                    setAlertColor("success");
                    setConfirmModal(true);
                    setOrderInfo(formData);
               }
          }
     }

     const validateFormData = (paramFormData) => {
          if (paramFormData.menuName === "") {
               setAlert(true);
               setTextAlert("Please choose your pizza size!");
               setAlertColor("error");
               return false;
          }
          if (paramFormData.pizzaType === "") {
               setAlert(true);
               setTextAlert("Please choose your pizza type!");
               setAlertColor("error");
               return false;
          }
          if (paramFormData.drink === "") {
               setAlert(true);
               setTextAlert("Please choose your drink!");
               setAlertColor("error");
               return false;
          }
          if (paramFormData.hoTen === "") {
               setAlert(true);
               setTextAlert("Please enter your full name!");
               setAlertColor("error");
               return false;
          }
          var vRegexStr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!vRegexStr.test(paramFormData.email)) {
               setAlert(true);
               setTextAlert("Your email is invalid!");
               setAlertColor("error");
               return false;
          }
          if (paramFormData.soDienThoai === "") {
               setAlert(true);
               setTextAlert("Please enter your phone number!");
               setAlertColor("error");
               return false;
          }
          if (paramFormData.diaChi === "") {
               setAlert(true);
               setTextAlert("Please enter your address!");
               setAlertColor("error");
               return false;
          } else {
               return true;
          }
     }

     return (
          <>
               <div className='row' id='order-info'>
                    <div className='col-sm-12 text-center p-4 mt-4 text-warning'>
                         <h3><b className='p-2 border-bottom border-warning'>Gửi đơn hàng</b></h3>
                    </div>
                    <div className='col-sm-12 p-4 mt-4' style={{ backgroundColor: '#eee', borderRadius: '15px' }}>
                         <div className='row'>
                              <div className='col-sm-12 form-group'>
                                   <label>Họ và tên</label>
                                   <input className='form-control' type={'text'} placeholder='Nhập họ và tên'
                                        value={hoTen} onChange={inputFullnameChange} />
                              </div>
                              <div className='col-sm-12 form-group pt-3'>
                                   <label>Email</label>
                                   <input className='form-control' type={'text'} placeholder='Nhập email'
                                        value={email} onChange={inputEmailChange} />
                              </div>
                              <div className='col-sm-12 form-group pt-3'>
                                   <label>Số điện thoại</label>
                                   <input className='form-control' type={'text'} placeholder='Nhập số điện thoại'
                                        value={soDienThoai} onChange={inputPhoneChange} />
                              </div>
                              <div className='col-sm-12 form-group pt-3'>
                                   <label>Địa chỉ</label>
                                   <input className='form-control' type={'text'} placeholder='Nhập địa chỉ'
                                        value={diaChi} onChange={inputAddressChange} />
                              </div>
                              <div className='col-sm-12 form-group pt-3'>
                                   <label>Mã giảm giá</label>
                                   <input className='form-control' type={'text'} placeholder='Nhập mã giảm giá'
                                        value={voucher} onChange={inputVoucherChange} />
                              </div>
                              <div className='col-sm-12 form-group pt-3'>
                                   <label>Lời nhắn</label>
                                   <input className='form-control' type={'text'} placeholder='Nhập lời nhắn'
                                        value={loiNhan} onChange={inputMessageChange} />
                              </div>
                              <div className='col-sm-12 form-group pt-4'>
                                   <button className='btn w-100' style={{ backgroundColor: 'orange' }} onClick={onBtnSendClick}>
                                        <b>Gửi</b></button>
                              </div>
                         </div>
                    </div>
               </div>
               <Snackbar
                    open={alert}
                    autoHideDuration={5000}
                    onClose={handleCloseAlert}
               >
                    <Alert onClose={handleCloseAlert} severity={alertColor}>{textAlert}</Alert>
               </Snackbar>

               <ConfirmOrderModal open={confirmModal} closeModal={closeConfirmModal} orderInfoProp={orderInfo} />
          </>
     )
}

export default FormComponent;