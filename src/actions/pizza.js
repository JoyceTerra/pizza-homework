export const CHANGE_BASE =  'CHANGE_BASE'
export const CHANGE_SAUCE =  'CHANGE_SAUCE'
export const CHANGE_TOPPINGS =  'CHANGE_TOPPINGS'
export const CHANGE_DELIVERY =  'CHANGE_DELIVERY'

export function ChosenBase(select_base, price) {
    return {
        type: CHANGE_BASE,
        payload: {
            select_base,
            price
        }
    }
}

export function ChosenSauce(select_sauce, price) {
    return {
        type: CHANGE_SAUCE,
        payload: {
            select_sauce,
            price
        }
    }
}

export function ChosenToppings(select_value) {
    return {
        type: CHANGE_TOPPINGS,
        payload: select_value
         
    }
}

export function ChosenDelivery(delivery_check) {
    return {
        type: CHANGE_DELIVERY,
        payload:  delivery_check
    }
}

