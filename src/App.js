import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        </div>
      </Provider>
        
     
    );
  }
}

export default App;