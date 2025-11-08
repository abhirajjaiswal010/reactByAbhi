import { useState } from "react"
import "../css/useState.css"

export const UseOF_useState=()=>{
const[count,setCount]=useState(0)

  return(
    <div className="container">
      <h1>Use of useState()</h1>
      <h1>Count-{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  )
}
