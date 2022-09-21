import React from "react";
import {Provider} from 'react-redux'
import './App.css'
import Counter from "./components/counter";
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
