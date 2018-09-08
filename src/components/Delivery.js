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
       this.props.ChosenDelivery(this.state.delivery_check)
    }

    render(){
        return(
            <div>
                <input type={'checkbox'} onChange={this.handleChange}/>
                <label className="delivery_label"><b>Do You Want It  SUPER FAST? </b></label>
                <br/>
                <label className="delivery_label">it costs only 10%</label>
                <br/>
                <br/>

            </div>
        )
    }

}

export default connect (null,{ChosenDelivery})(Delivery)