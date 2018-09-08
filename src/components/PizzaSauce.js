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
            <div className="base_items">
                <h3>What's the best sauce?</h3>
                <br />
                    <ul>
                        {sauces.map(sauce => <li key={ sauce.id }>
                        <input className="radio_button"  name={ 'sauce' } type={ 'radio' } value={sauce.price} id={sauce.name} onChange={this.handleChange} />
                        <p><span>{ sauce.name } &nbsp;  &nbsp;  &euro;  { sauce.price }</span> </p>
                         </li> )}
                    </ul>
            </div>
        )
    }
}

export default connect(null, {ChosenSauce})(PizzaSauce)