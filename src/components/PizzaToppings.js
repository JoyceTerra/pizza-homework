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

    handleChange = (event) =>{
        if(this.state.checked_toppings.lenght >= 3){
            event.target.check = false
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
        console.log(this.props.ChosenToppings(this.state.checked_toppings))

        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                
                    <label className="label_titles">You can choose 3 Toppings</label>
                    <br/>
                    <br/>
                    <div className="toppings">
                   
                        { toppings.map( topping => {
                              return (
                               
                            <label key={ topping }>
                            <input className="label-item" type={ 'checkbox' } value={ topping } onChange={this.handleChange} /> { topping }
                            </label>
                              )
                        })}
                        <br/>
                        <br/>
                       

                        <button type="submit" >Add Toppings</button>
                        <br/>
                        <br/>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {ChosenToppings})(PizzaToppings)