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
     
    )
}
export default connect(mapStateToProps)(Counter);