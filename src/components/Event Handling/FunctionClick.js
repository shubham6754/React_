import React from 'react'

 function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}


export default FunctionClick

// The function use to handle the event should be {clickHandler} should be in 
// Camel case
// In javascript we can write one function between the another
// on click we passed the function ,there are not parentheses,if they are there 
// then it is a function call
// Event handler is a function not a function call