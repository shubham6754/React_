// #4th approach

import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:false
    }
  }
  
  render() {
   return this.state.isLoggedIn && <div>Welcome Vishwas</div>
  //  in this case the left side is evaluted first and only if it is true then the 
  // -right side of the exp is evaluated
  }

  
}

export default UserGreeting




// So the question is can't we have if else statement in JSX
// Answer is no

// render() {
//   if(this.state.isLoggedIn){
//     return(
//       <div>Welcome Vishwas
//       </div>
//     )
//   }else{
//     return(
//       <div>Welcome guest</div>
//     )
//   }

// ==========1st approach
// import React, { Component } from 'react'

// class UserGreeting extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        isLoggedIn:true
//     }
//   }
  
//   render() {
//     if(this.state.isLoggedIn){
//       return(
//         <div>Welcome Vishwas
//         </div>
//       )
//     }else{
//       return(
//         <div>Welcome guest</div>
//       )
//     }

//     // return (
//     //   <div>
//     //    <div> Welcome Vishwas</div>
//     //    <div>Welcome Guest</div>
//     //   </div>
//     // )
//   }
// }

// export default UserGreeting









// Second approach

// import React, { Component } from 'react'

// class UserGreeting extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        isLoggedIn:false
//     }
//   }
  
//   render() {
//     let message
//     if(this.state.isLoggedIn){
//       message=<div>Welcome Vishwas</div>
//     }else{
//       message=<div>Welcome Guest</div>
//     }

//     return <div>{message}</div>
//   }

  
// }

// export default UserGreeting






// #3rd approach

// import React, { Component } from 'react'

// class UserGreeting extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        isLoggedIn:false
//     }
//   }
  
//   render() {
//    return this.state.isLoggedIn?
//    <div>Welcome Vishwas</div>:
//    <div>Welcome Guest</div>
//   }

  
// }

// export default UserGreeting
