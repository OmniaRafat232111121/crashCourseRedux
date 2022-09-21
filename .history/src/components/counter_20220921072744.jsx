import React from "react";
import {connect} from 'react-redux'
class Counter extends React.Component(){
render(){
    return(
        <div>
        counter:{this.state.counter}
        </div>
    )
}
}

const mapStateToProps=(state)=>{
    return(
     counter:state
    )
}
export default connect(mapStateToProps)(Counter);