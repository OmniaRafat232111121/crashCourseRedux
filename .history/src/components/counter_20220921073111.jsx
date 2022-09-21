import React from "react";
import {connect} from 'react-redux'
class Counter extends React.Component(){
render(){
    return(
        <div>
        counter:{this.props.counter}
        <br /><br />
            <button onClick={this.props.increament}>+</button>
            <button onClick={this.props.decreament}>-</button>
        </div>
    )
}
}

const mapStateToProps=(state)=>{
    return(
     counter:state.counter;
    );
}const mapDispatch

export default connect(mapStateToProps,mapDispatchToProps)(counter);