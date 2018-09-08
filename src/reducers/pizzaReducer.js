import  { CHANGE_BASE, CHANGE_SAUCE, CHANGE_TOPPINGS }  from '../actions/pizza'

const initialState = {
  base: " ",
  price_base: " ",
  sauce: " ",
  price_sauce: " ",
  toppings: " ",
}

export default function (state = initialState, {type, payload}) {
    switch(type){
      case CHANGE_BASE:
        return{
          ...state,
          base: payload.select_base,
          price_base: payload.price
        }
      case CHANGE_SAUCE:
      return{
        ...state,
        sauce: payload.select_sauce,
        price_sauce: payload.price
      }
      case CHANGE_TOPPINGS:
          return {
            ...state,
            toppings: payload,
          }
      default:
        return state
    }
   
  }