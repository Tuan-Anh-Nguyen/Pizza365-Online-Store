import { PIZZA_SIZE_SMALL, PIZZA_SIZE_MEDIUM, PIZZA_SIZE_LARGE } from "../constants/PizzaSizeActionTypes";

export function pizzaSizeSmall() {
     return {
          type: PIZZA_SIZE_SMALL,
          payload: {
               menuName: 'Small',
               duongKinh: 20,
               suon: 2,
               salad: 200,
               nuocNgot: 2,
               thanhTien: 150000

          }
     }
}

export function pizzaSizeMedium() {
     return {
          type: PIZZA_SIZE_MEDIUM,
          payload: {
               menuName: 'Medium',
               duongKinh: 25,
               suon: 4,
               salad: 300,
               nuocNgot: 3,
               thanhTien: 200000
          }
     }
}

export function pizzaSizeLarge() {
     return {
          type: PIZZA_SIZE_LARGE,
          payload: {
               menuName: 'Large',
               duongKinh: 30,
               suon: 8,
               salad: 400,
               nuocNgot: 2,
               thanhTien: 250000
          }
     }
}