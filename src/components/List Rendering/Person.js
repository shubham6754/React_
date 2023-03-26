import React from 'react'

function Person({person}) {
    console.log("This is ")
    console.log(person.name)
  return (
    <div>
    <h2>I am {person.name}</h2>
    </div>
  )
}

export default Person


// so we made a child component for JSX part to make our code more readable