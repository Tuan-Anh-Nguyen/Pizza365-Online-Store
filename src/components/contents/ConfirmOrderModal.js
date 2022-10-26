import { Modal, Box, Typography, Grid, FormLabel, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateOrderModal from "./CreateOrderModal";

const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 800,
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
};

export default function ConfirmOrderModal({ open, closeModal, orderInfoProp }) {
     const { menuName, duongKinh, suon, salad, nuocNgot, thanhTien } = useSelector((data) => data.pizzaSizeReducers);
     const { pizzaType } = useSelector((data) => data.pizzaTypeReducers);

     const [fullname, setFullname] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [address, setAddress] = useState("");
     const [voucher, setVoucher] = useState("");
     const [price, setPrice] = useState("");
     const [combo, setCombo] = useState("");
     const [loaiPizza, setLoaiPizza] = useState("");
     const [drink, setDrink] = useState("");
     const [message, setMessage] = useState("");

     const [createOrderModal, setCreateOrderModal] = useState(false);
     const [orderCode, setOrderCode] = useState("");

     const fetchAPICreateOrder = async (url, body) => {
          const res = await fetch(url, body);
          const data = await res.json();
          return data;
     }

     const cancelButtonClick = () => {
          closeModal();
     }

     useEffect(() => {
          setFullname(orderInfoProp.hoTen);
          setEmail(orderInfoProp.email);
          setPhone(orderInfoProp.soDienThoai);
          setAddress(orderInfoProp.diaChi);
          setVoucher(orderInfoProp.voucher);
          setPrice(orderInfoProp.priceActual);
          setCombo(orderInfoProp.menuName);
          setLoaiPizza(orderInfoProp.pizzaType);
          setDrink(orderInfoProp.drink);
          setMessage(orderInfoProp.loiNhan);
     }, [open]);

     const onBtnCreateOrderClick = () => {
          closeModal();
          setCreateOrderModal(true);
          var createOrder = {
               kichCo: menuName,
               duongKinh: duongKinh,
               suon: suon,
               salad: salad,
               loaiPizza: pizzaType,
               idVourcher: orderInfoProp.voucher,
               idLoaiNuocUong: orderInfoProp.drink,
               soLuongNuoc: nuocNgot,
               hoTen: orderInfoProp.hoTen,
               thanhTien: thanhTien,
               email: orderInfoProp.email,
               soDienThoai: orderInfoProp.soDienThoai,
               diaChi: orderInfoProp.diaChi,
               loiNhan: orderInfoProp.loiNhan
          }
          const body = {
               method: 'POST',
               body: JSON.stringify({
                    kichCo: createOrder.kichCo,
                    duongKinh: createOrder.duongKinh,
                    suon: createOrder.suon,
                    salad: createOrder.salad,
                    loaiPizza: createOrder.loaiPizza,
                    idVourcher: createOrder.idVourcher,
                    idLoaiNuocUong: createOrder.idLoaiNuocUong,
                    soLuongNuoc: createOrder.soLuongNuoc,
                    hoTen: createOrder.hoTen,
                    thanhTien: createOrder.thanhTien,
                    email: createOrder.email,
                    soDienThoai: createOrder.soDienThoai,
                    diaChi: createOrder.diaChi,
                    loiNhan: createOrder.loiNhan
               }),
               headers: {
                    'Content-type': 'application/json; charset=UTF-8'
               }
          }
          fetchAPICreateOrder("http://203.171.20.210:8080/devcamp-pizza365/orders", body)
               .then((data) => {
                    console.log(data);
                    // console.log(data.orderCode);
                    setOrderCode(data.orderCode);
               })
               .catch((err) => console.error(err.message))
     }

     return (
          <>
               <Modal
                    open={open}
               >
                    <Box sx={style}>
                         <Typography variant="h5" component="h2">
                              <b>Thông Tin Đơn Hàng</b>
                         </Typography>
                         <Grid container mt={2}>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <FormLabel>Họ và tên</FormLabel>
                              </Grid>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <TextField fullWidth variant="outlined" label="Họ và tên" value={fullname} disabled></TextField>
                              </Grid>
                              <Grid item xs={2} sm={2} md={2} lg={2} textAlign="center">
                                   <FormLabel>Email</FormLabel>
                              </Grid>
                              <Grid item xs={4} sm={4} md={4} lg={4}>
                                   <TextField fullWidth variant="outlined" label="Email" value={email} disabled></TextField>
                              </Grid>
                         </Grid>
                         <Grid container mt={1}>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <FormLabel>Số Điện Thoại</FormLabel>
                              </Grid>
                              <Grid item xs={9} sm={9} md={9} lg={9}>
                                   <TextField fullWidth variant="outlined" label="Số Điện Thoại" value={phone} disabled></TextField>
                              </Grid>
                         </Grid>
                         <Grid container mt={1}>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <FormLabel>Địa Chỉ</FormLabel>
                              </Grid>
                              <Grid item xs={9} sm={9} md={9} lg={9}>
                                   <TextField fullWidth variant="outlined" label="Địa Chỉ" value={address} disabled></TextField>
                              </Grid>
                         </Grid>
                         <Grid container mt={1}>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <FormLabel>Mã Giảm Giá</FormLabel>
                              </Grid>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <TextField fullWidth variant="outlined" label="Mã Giảm Giá" value={voucher} disabled></TextField>
                              </Grid>
                              <Grid item xs={2} sm={2} md={2} lg={2} textAlign="center">
                                   <FormLabel>Thành Tiền</FormLabel>
                              </Grid>
                              <Grid item xs={4} sm={4} md={4} lg={4}>
                                   <TextField fullWidth variant="outlined" label="Thành Tiền" value={price} disabled></TextField>
                              </Grid>
                         </Grid>
                         <Grid container mt={1}>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <FormLabel>Combo</FormLabel>
                              </Grid>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <TextField fullWidth variant="outlined" label="Combo" value={combo} disabled></TextField>
                              </Grid>
                              <Grid item xs={2} sm={2} md={2} lg={2} textAlign="center">
                                   <FormLabel>Đồ Uống</FormLabel>
                              </Grid>
                              <Grid item xs={4} sm={4} md={4} lg={4}>
                                   <TextField fullWidth variant="outlined" label="Đồ Uống" value={drink} disabled></TextField>
                              </Grid>
                         </Grid>
                         <Grid container mt={1}>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <FormLabel>Loại Pizza</FormLabel>
                              </Grid>
                              <Grid item xs={9} sm={9} md={9} lg={9}>
                                   <TextField fullWidth variant="outlined" label="Loại Pizza" value={loaiPizza} disabled></TextField>
                              </Grid>
                         </Grid>
                         <Grid container mt={2}>
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                   <FormLabel>Lời Nhắn</FormLabel>
                              </Grid>
                              <Grid item xs={9} sm={9} md={9} lg={9}>
                                   <TextField fullWidth variant="outlined" label="Lời Nhắn" value={message} disabled></TextField>
                              </Grid>
                         </Grid>
                         <Grid container mt={1}>
                              <Grid item xs={12} textAlign="end">
                                   <Button color="success" variant="contained" className="me-1"
                                        onClick={onBtnCreateOrderClick}>Tạo Đơn</Button>
                                   <Button color="error" variant="contained" onClick={cancelButtonClick}>Quay Lại</Button>
                              </Grid>
                         </Grid>
                    </Box>
               </Modal>
               <CreateOrderModal open={createOrderModal} orderCodeProp={orderCode} />
          </>
     )
}