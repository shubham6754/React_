import React from 'react'

// function Greet(){
//     return <h1>Hello Shubham</h1>
// }


// In functional components the name really did not matter 
// As I used pdrops instead of props the code does not break
// But in class component it will break
const Greet=(pdrops)=>{
    console.log(pdrops)
    // pdrops.name=tarun; ==>This will throw an error cannot assign to read only 
    // property as props are immutable
    
    return (
        <div><h1>Hello {pdrops.name}
        </h1>
        {pdrops.children}</div>
        
    )
}
export default Greet