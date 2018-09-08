import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChosenSauce }  from '../actions/pizza'
import { sauces } from '../db'
import '../styles.css'

class PizzaSauce extends Component{
    constructor(){
        super()
        this.state = {}
    }
    handleChange = (event) =>{
         this.props.ChosenSauce(event.target.id, event.target.value)
    }
    render(){
        return(
            <div className="container_sauce">
                <h3>What's the best sauce?</h3>
                <div>
                    <ul>
                        {sauces.map(sauce => <li key={ sauce.id }>
                        <input className="radio_button"  name={ 'sauce' } type={ 'radio' } value={sauce.price} id={sauce.name} onChange={this.handleChange} />
                       <div className="label-item"> <label>{ sauce.name }</label> </div>
                       <br/>
                        <div className="label-item-price"><label> &euro; { sauce.price }</label></div>
                         </li> )}
                    </ul>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default connect(null, {ChosenSauce})(PizzaSauce)