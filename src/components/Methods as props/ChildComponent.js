import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent

// So the requriment is to call the call a method from child component
// Here we have greetHandler in the parent component which we want to call from here

// ===simple one without parameters

// import React from 'react'

// function ChildComponent(props) {
//   return (
//     <div>
//       <button onClick={props.greetHandler}>Greet Parent</button>
//     </div>
//   )
// }

// export default ChildComponent