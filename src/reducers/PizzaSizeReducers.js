import { PIZZA_SIZE_SMALL, PIZZA_SIZE_MEDIUM, PIZZA_SIZE_LARGE } from "../constants/PizzaSizeActionTypes";

const initialState = {
     menuName: '',
     duongKinh: '',
     suon: '',
     salad: '',
     nuocNgot: '',
     thanhTien: ''
}

export default function pizzaSizeReducers(state = initialState, action) {
     switch (action.type) {
          case PIZZA_SIZE_SMALL:
               return {
                    ...state,
                    menuName: action.payload.menuName,
                    duongKinh: action.payload.duongKinh,
                    suon: action.payload.suon,
                    salad: action.payload.salad,
                    nuocNgot: action.payload.nuocNgot,
                    thanhTien: action.payload.thanhTien
               }
          case PIZZA_SIZE_MEDIUM:
               return {
                    ...state,
                    menuName: action.payload.menuName,
                    duongKinh: action.payload.duongKinh,
                    suon: action.payload.suon,
                    salad: action.payload.salad,
                    nuocNgot: action.payload.nuocNgot,
                    thanhTien: action.payload.thanhTien
               }
          case PIZZA_SIZE_LARGE:
               return {
                    ...state,
                    menuName: action.payload.menuName,
                    duongKinh: action.payload.duongKinh,
                    suon: action.payload.suon,
                    salad: action.payload.salad,
                    nuocNgot: action.payload.nuocNgot,
                    thanhTien: action.payload.thanhTien
               }
          default:
               return state;
     }
}  