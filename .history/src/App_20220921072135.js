import React from "react";
import {Provider} from 'react-redux'
import './App.css'
function App() {
  return (
    <Provider>
    <div className="app">
    <Counter/>
    </div>
    </Provider>
  );
}

export default App;
