// import React from 'react'
// class Person extends React.Component
// {
//     constructor()
//     {
//         super()
//         this.state={
//             name:"iqra",
//             age:26
//         }
//     }
//     chnage()
//     {
//         this.setState({name:"ayesha"})
//     }
//     render()
//     {
//         return(
//             <>
//             <h1>{this.state.name}</h1>
//             <button onClick={()=>{this.chnage()}}>Change Name</button>
//             </>
//         )
//     }
// }
// export default Person
import React, { useState } from 'react'

export default function Person() {
    let [text,settext]=useState({name:"iqra",age:10});
  return (
    <div>
      <h1>{text.name}  and age {text.age}</h1>
      <button onClick={()=>settext({name:"Amna",age:25})}>Change</button>
    </div>
  )
}
