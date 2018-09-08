import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChosenToppings } from '../actions/pizza'
import { toppings } from '../db'
import '../styles.css'

class PizzaToppings extends Component{
    constructor(props){
        super(props)
        this.state = {
            checked_toppings: [],
            checked: false 
        }
    }
    handleChange = (event) =>{
        if(this.state.checked_toppings.length >= 3){
            event.target.checked = false
        }
        if(event.target.checked === true){
            this.setState({
                checked_toppings: [
                    ...this.state.checked_toppings,
                    event.target.value
                ],
                checked: event.target.checked
            })
        }else{
            const filteredToppings = this.state.checked_toppings
            .filter(oneTopping => oneTopping !== event.target.value)
            this.setState({ checked_toppings: filteredToppings, checked: event.target.checked})
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.ChosenToppings(this.state.checked_toppings)
    }
    render(){
        return(
            <div className="toppings">
                <form onSubmit={ this.handleSubmit }>
                    <h3>You can choose 3 toppings</h3>
                    <br/>
                        { toppings.map( topping => {
                            return (
                                <label>
                                    <input className="label-item-topping" type={ 'checkbox' } value={ topping } onChange={this.handleChange} /> { topping }
                                </label>
                              )
                        })}
                        <br/>
                        <button type="submit" >Add Toppings</button>
                    <br/>
                </form>
            </div>
        )
    }
}

export default connect(null, {ChosenToppings})(PizzaToppings)