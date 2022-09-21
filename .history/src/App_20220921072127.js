import React from "react";
import {Provider} from 'react-redux'

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
