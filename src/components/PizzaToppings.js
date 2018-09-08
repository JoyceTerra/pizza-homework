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
        // console.log(props)

    }
        // console.log(event)

    handleEvent = (event) =>{
        if(this.state.checked_toppings.lenght >= 3){
            event.target.check === false
        }
        if(event.target.checked === true){
            this.setState({
                checked_toppings: [
                    this.this.state.checked_toppings,
                    event.target.value
                ],
                checked: event.target.checked
            })
        }else{
            const filteredToppings = this.this.state.checked_toppings
            .filter(oneTopping => oneTopping !== event.target.value)
            this.setState({ checked_toppings: filteredToppings, checked: event.target.checked})
        }

    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.ChosenToppings(this.state.checked_toppings)
    }
    

    render(){
        // console.log(this.state.checked_toppings)

        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label className="label_titles">You can choose 3 Toppings</label>
                    <div>
                        { toppings.map( topping => {
                            <label key={ topping }>
                            <input className="label-item" type={ 'checkbox' } value={ topping } onChange={this.handleChange} /> { topping }
                            </label>
                        })}

                        <button type="submit" primary={true}>Add Toppings</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default connect(null, {ChosenToppings})(PizzaToppings)