import { Modal, Box , Typography, Grid, FormLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 500,
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
};

export default function CreateOrderModal({ open, orderCodeProp }) {
     const [orderCodeInput, setOrderCodeInput] = useState("");

     useEffect(() => {
          setOrderCodeInput(orderCodeProp);
     }, [open, orderCodeProp])

     return (
          <Modal
               open={open}
          >
               <Box sx={style}>
                    <Typography variant="h6" component="h2">
                         <b>Cảm ơn bạn đã đặt hàng tại Pizza 365. Mã đơn hàng của bạn là:</b>
                    </Typography>
                    <Grid container mt={2}>
                         <Grid item xs={4} sm={4} md={4} lg={4}>
                              <FormLabel>Mã đơn hàng:</FormLabel>
                         </Grid>
                         <Grid item xs={8} sm={8} md={8} lg={8}>
                              <TextField fullWidth variant="outlined" value={orderCodeInput} disabled></TextField>
                         </Grid>
                    </Grid>
               </Box>
          </Modal>
     )
}