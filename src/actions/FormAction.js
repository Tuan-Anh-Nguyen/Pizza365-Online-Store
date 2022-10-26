import {
     ADDRESS_INPUT_CHANGE,
     EMAIL_INPUT_CHANGE,
     FULLNAME_INPUT_CHANGE,
     MESSAGE_INPUT_CHANGE,
     PHONE_INPUT_CHANGE,
     VOUCHER_INPUT_CHANGE
} from "../constants/FormActionTypes";

export function fullnameChange(value) {
     return {
          type: FULLNAME_INPUT_CHANGE,
          payload: value
     }
}

export function emailChange(value) {
     return {
          type: EMAIL_INPUT_CHANGE,
          payload: value
     }
}

export function phoneChange(value) {
     return {
          type: PHONE_INPUT_CHANGE,
          payload: value
     }
}

export function addressChange(value) {
     return {
          type: ADDRESS_INPUT_CHANGE,
          payload: value
     }
}

export function voucherChange(value) {
     return {
          type: VOUCHER_INPUT_CHANGE,
          payload: value
     }
}

export function messageChange(value) {
     return {
          type: MESSAGE_INPUT_CHANGE,
          payload: value
     }
}