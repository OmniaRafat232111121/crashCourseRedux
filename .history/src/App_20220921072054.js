import React from "react";
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider>
    <div className="a">
    <Counter/>
    </div>
    </Provider>
  );
}

export default App;
