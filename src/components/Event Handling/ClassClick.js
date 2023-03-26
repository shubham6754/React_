import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('clicked the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick

// use rce (React snippet) to create class component
// so in class component we handle events in the same way as we do in functional 
// -component ,the only diff is we this keyword to access the components 

