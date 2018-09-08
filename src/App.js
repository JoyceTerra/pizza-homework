import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Form from './components/Form'
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Form/>   
        </div>
      </Provider>
    );
  }
}

export default App;
