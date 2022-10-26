import {
     ADDRESS_INPUT_CHANGE,
     EMAIL_INPUT_CHANGE,
     FULLNAME_INPUT_CHANGE,
     MESSAGE_INPUT_CHANGE,
     PHONE_INPUT_CHANGE,
     VOUCHER_INPUT_CHANGE
} from "../constants/FormActionTypes";

const initialState = {
     hoTen: "",
     email: "",
     soDienThoai: "",
     diaChi: "",
     voucher: "",
     loiNhan: ""
}

export default function formReducers(state = initialState, action) {
     switch (action.type) {
          case FULLNAME_INPUT_CHANGE:
               return {
                    ...state,
                    hoTen: action.payload
               }
          case EMAIL_INPUT_CHANGE:
               return {
                    ...state,
                    email: action.payload
               }
          case PHONE_INPUT_CHANGE:
               return {
                    ...state,
                    soDienThoai: action.payload
               }
          case ADDRESS_INPUT_CHANGE:
               return {
                    ...state,
                    diaChi: action.payload
               }
          case VOUCHER_INPUT_CHANGE:
               return {
                    ...state,
                    voucher: action.payload
               }
          case MESSAGE_INPUT_CHANGE:
               return {
                    ...state,
                    loiNhan: action.payload
               }
          default:
               return state;
     }
}