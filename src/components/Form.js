import React, { Component } from 'react';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaToppings from './PizzaToppings'
import Delivery from './Delivery'
import TotalPrice from './TotalPrice'




export default class Form extends Component {
    render(){
        return(
            <form className="container_form">
                <h1>New Age Pizza</h1>
                {/* call the components here */}
                <PizzaBase />
                <PizzaSauce />
                <PizzaToppings />
                <Delivery />
                <TotalPrice />
            </form>
        )
    }
}