import React from "react";
import {Provider} from 'react-redux'
import './App.css'
import Counter from "./components/counter";
function App() {
  return (
    <Provider store={stor}>
    <div className="app">
<Counter/>
    </div>
    </Provider>
  );
}

export default App;
