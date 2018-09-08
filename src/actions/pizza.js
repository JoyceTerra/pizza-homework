export const CHANGE_BASE =  'CHANGE_BASE'
export const CHANGE_SAUCE =  'CHANGE_SAUCE'


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

