import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ChosenDelivery } from '../actions/pizza'
import '../styles.css'

class Delivery extends Component{

    handleChange= (event)=> {
        console.log(event.target.checked)
    this.props.ChosenDelivery(event.target.checked)
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