import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChosenSauce }  from '../actions/pizza'
import { sauces } from '../db'
import '../styles.css'


class PizzaSauce extends Component{
    constructor(){
        super()
        // this.handleChange = this.handleChange.bind(this)

        this.state = {}
    }
    // console.log(event)
    handleChange = (event) =>{
        this.setState({ 
            id: event.target.key, 
            name: event.target.name, 
            price: event.target.value 
        })
       
        this.props.ChosenSauce(event.target.title, event.target.value)

    }
    render(){
        return(
            <div>
                <h3 className="label_titles">What's the best sauce?</h3>
                <div className="container_items">
                    <ul>
                        {sauces.map(sauce => <li key={ sauce.id }>
                        <input className="radio_button"  name={ 'sauce' } type={ 'radio' } value={sauce.price} id={sauce.name} onChange={this.handleChange} />
                       <div className="label-item"> <label>{ sauce.name }</label> </div>
                       <br/>
                        <div className="label-item-price"><label> &euro; { sauce.price }</label></div>
                        </li> )}
                    </ul>
                </div>

            </div>

        )
    }
}

export default connect(null, {ChosenSauce})(PizzaSauce)