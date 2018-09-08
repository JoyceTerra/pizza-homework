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
            <div className="delivery">
                <input type={'checkbox'} onChange={this.handleChange}/>
                <b>Do you want it  SUPER FAST? </b>
                <br/>
                <label className="dez">it costs only 10% more</label>
                <br/>
                <br/>
            </div>
        )
    }

}

export default connect (null,{ChosenDelivery})(Delivery)