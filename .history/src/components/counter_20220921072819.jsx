import React from "react";
import {connect} from 'react-redux'
class Counter extends React.Component(){
render(){
    return(
        <div>
        counter:{this.counter}
        </div>
    )
}
}

const mapStateToProps=(state)=>{
    return(
     counter:state.counter
    )
}
export default connect(mapStateToProps)(Counter);