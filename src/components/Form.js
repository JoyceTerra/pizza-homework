import React, { Component } from 'react';
import PizzaBase from './PizzaBase'
import PizzaSauce from './PizzaSauce'
import PizzaToppings from './PizzaToppings'
import Delivery from './Delivery'
import TotalPrice from './TotalPrice'

export default class Form extends Component {
    render(){
        return(
            <div>
                <header><h1>New Age Pizza</h1></header>
                <form className="container_form">
                    <PizzaBase />
                    <PizzaSauce />
                    <PizzaToppings />
                    <Delivery />
                    <TotalPrice />
                </form>
            </div>
        )
    }
}