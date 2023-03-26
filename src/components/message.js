import React, { Component } from "react";


class Message extends Component{
    constructor(){
        super() 
        // This is required becuse we extend react Component class and a call has 
        // to be made to the base class constructor
        console.log(this)
    
        this.state={
            message:'Welcome visitor'
        }
        console.log(this.state)
        console.log(this.state.message)
        console.log(typeof(this.state.message))


        
    }

    changeMessage(){
        this.setState({
            message:'Thanks for subscribing'
        })
    }

render(){
    return (
        <div><h1> {this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>
        
    )
   

}
}

export default Message

// So the steps to use state in class
// 