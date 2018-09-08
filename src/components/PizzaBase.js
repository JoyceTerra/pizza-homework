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

//     <tr>
//     <td>Alfreds Futterkiste</td>
//     <td>Maria Anders</td>
//     <td>Germany</td>
//   </tr>

    render(){
        return(
            <div>
                <h3>What's the best crust?</h3>
                <div>
                    <ul>
                        {bases.map(base => <li key={ base.id }>
                        <input className="radio_button" name={ 'base' } type={ 'radio' } value={ base.price } id={ base.name} onChange={this.handleChange} />

                       <div className="label-item"> <label>{ base.name }</label> </div>

                       <br/>

                        <div className="label-item-price"><label> &euro; { base.price }</label></div>
                        </li> )}
                    </ul>
                    <br/>
                </div>

            </div>
        )
    }
}


export default connect(null, {ChosenBase})(PizzaBase)