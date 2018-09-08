import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ChosenDelivery } from '../actions/pizza'
import '../styles.css'

class Delivery extends Component{
    constructor() {
        super()
        this.state = {
            delivery_check: true
        }
    }
    handleChange(event) {
    this.setState(delivery_check => ({
        delivery_check: !this.state.delivery_check
    }))
       this.props.ChosenDelivery(this.state. delivery_check)
    }

    render(){
        return(
            <div>
                <input type={'checkbox'} onChange={this.handleChange}/>
                <label className="delivery_label">Do You Want It  SUPER FAST?</label>
            </div>
        )
    }

}

export default connect (null,{ChosenDelivery})(Delivery)