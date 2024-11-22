import React, { useState } from 'react'

const Studentstate = () => {
    const [count,setCount]=useState(0)
    function doincreament (){
        setCount(count+30)
    }
    function dodecreament (){
        setCount(count-30)
    }
  return (
    <div>
<h1>counter: {count}</h1>
<button id="btn" onClick={doincreament}>Increment</button>
<button id="btn" onClick={dodecreament}>decrement</button>
    </div>
  )
}

export default Studentstate
