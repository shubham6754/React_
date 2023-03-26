import React from 'react'
import Person from './Person'
function NameList() {
    const persons=[
        {id:1,
        name:'Rashmi',
        age:23,
        skill:'Networking'
    },
    {id:1,
        name:'Karan',
        age:30,
        skill:'React'
    },
    {id:1,
        name:'Pratap',
        age:30,
        skill:'JS'
    }
    ]

    console.log(persons)
    console.log(typeof(persons))

    const personList=persons.map(person=>(
        <Person person={person}></Person>
        ))

    console.log("Below is type ")

    console.log(personList)
    console.log(typeof(personList))

  return <div>{personList}</div>
}

export default NameList


// The below works fine but imagine doing this for 100 lines

// import React from 'react'

// function NameList() {
//     const names=['Rashmi','Ab','RNSIT']
//   return (
//     <div>
//     <h2>{names[0]}</h2>
//     <h2>{names[1]}</h2>
//     <h2>{names[2]}</h2>

//     </div>
//   )
// }

// export default NameList


// 2nd approach


// function NameList() {
//     const names=['Rashmi','Ab','RNSIT']
//   return (
//     <div>
//     {names.map(name=><h2>{name}</h2>)}

//     </div>
//   )
// }

// export default NameList


// Third method

// import React from 'react'

// function NameList() {
//     const names=['Rashmi','Ab','RNSIT']
//     const nameList=names.map(name=><h2>{name}</h2>)
//     console.log(nameList)
//   return <div>{nameList}</div>
// }

// export default NameList


//Little complex example 

// import React from 'react'

// function NameList() {
//     const persons=[
//         {id:1,
//         name:'Rashmi',
//         age:23,
//         skill:'Networking'
//     },
//     {id:1,
//         name:'Karan',
//         age:30,
//         skill:'React'
//     },
//     {id:1,
//         name:'Pratap',
//         age:30,
//         skill:'JS'
//     }
//     ]

//     console.log(persons)
//     console.log(typeof(persons))

//     const personList=persons.map(person=><h2>I am {person.name}</h2>)
//     console.log("Below is type ")

//     console.log(personList)
//     console.log(typeof(personList))

//   return <div>{personList}</div>
// }

// export default NameList