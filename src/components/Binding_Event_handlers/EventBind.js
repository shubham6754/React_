import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

    }



clickHandler=()=>{
    this.setState({
        message:'Goodbye!'
    })
}
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind


// 1)We can bind like below as well (Binding in the render methd)
// render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick={this.clickHandler.bind(this)}>Click</button>
//       </div>
//     )



// 2) using arrow keyword in the render method

// render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick={()=>this.clickHandler()}>Click</button>
//       </div>
//     )
//   }


// 3rd approach  ==>Binding in the constructor 

// import React, { Component } from 'react'

// class EventBind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message:'Hello'
//       }

//       this.clickHandler=this.clickHandler.bind(this)
//     }
// clickHandler(){
//     this.setState({
//         message:'Goodbye'
//     })

//     console.log(this)
//     // this wiil give you undefined in console if the binding is not yet done
// }

    
//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }

// export default EventBind


// 4th approach Class property as arrow function

// import React, { Component } from 'react'

// class EventBind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message:'Hello'
//       }

//     }



// clickHandler=()=>{
//     this.setState({
//         message:'Goodbye!'
//     })
// }
    
//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }

// export default EventBind
