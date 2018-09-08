import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChosenBase } from '../actions/pizza'
import { bases } from '../db'
import '../styles.css'

class PizzaBase extends Component{
    constructor(){
        super()
        this.state = {}
    }
    handleChange = (event)  => {
        this.setState({ 
            id: event.target.key, 
            name: event.target.name, 
            price: event.target.value 
        })
        this.props.ChosenBase(event.target.id, event.target.value)
    }
    render(){
        return(
                <div className="base_items">
                <h3>What's the best crust?</h3>
                <br />
                    <ul>
                        {bases.map(base => <li key={ base.id }>
                        <input className="radio_button" name={ 'base' } type={ 'radio' } value={ base.price } id={ base.name} onChange={this.handleChange} />
                       <p><span> { base.name } &nbsp;  &nbsp;  &euro; { base.price }</span> </p>
                        </li> )}
                    </ul>
            </div>
        )
    }
}

export default connect(null, {ChosenBase})(PizzaBase)