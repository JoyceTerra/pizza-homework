import React, { Component } from 'react'
import { connect } from 'react-redux'

class TotalPrice extends Component{
    render(){
        const totalPrice = Number(this.props.pizzaReducer.price_base) + Number(this.props.pizzaReducer.price_sauce) + Number(this.props.pizzaReducer.toppings.length * 0.50)
        const priceWithDelivery = ( totalPrice * 0.1 )
        return(
            <div className="price">
                <label>Price </label>
                &nbsp;  &nbsp; 
                {(this.props.pizzaReducer.delivery_check) ? <input className="total_price" type="text"value={Number(totalPrice + priceWithDelivery)}/> :  <input className="total_price" type="text"value={ totalPrice }/>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {pizzaReducer: state.pizzaReducer}
}

export default connect(mapStateToProps)(TotalPrice)