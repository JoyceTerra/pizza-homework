import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChosenBase from '../actions/pizza'
import { bases } from '../db'
import '../styles.css'

class PizzaBase extends Component{
    constructor(){
        super()
        this.handleChange 

        this.state = {}
    }

    handleChange = (event)  => {
        this.setState({ 
            id: event.target.key, 
            name: event.target.title, 
            price: event.target.value 
        })
        
        this.props.ChosenBase(event.target.title, event.target.value)
    }

    render(){
        return(
            <div>
                <h3 className="label_titles">What's the best crust?</h3>
                <div className="container_items">
                    <ul>
                        {bases.map(base => <li key={ base.id }>
                        <input className="radio_button" name={ 'base' } type={ 'radio' } onChange={this.handleChange} />
                        
                       <div className="label-item"> <label>{ base.name }</label> </div>

                       <br/>

                        <div className="label-item-price"><label> &euro; { base.price }</label></div>
                        </li> )}
                    </ul>
                </div>

            </div>
        )
    }
}


export default connect(null, {ChosenBase})(PizzaBase)