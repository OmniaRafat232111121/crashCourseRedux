import React from "react";
import {connect} from 'react-redux'
class Counter extends React.Component(){
render(){
    return(
        <div>
        counter:{this.stat}
        </div>
    )
}
}

export default counter;