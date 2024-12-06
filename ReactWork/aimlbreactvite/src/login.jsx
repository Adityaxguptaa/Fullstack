import React, { useState } from 'react'



function Registration() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState();

    const getdata = ()=>{
        
    }

  return (
    <div>
        <h1>Registration</h1>
        <form action="">
           <div>
            <label htmlFor="">Username : </label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
           </div>
           <div>
            <label htmlFor="">Email : </label>
            <input type="email" name="" id="" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
           </div>
           <div>
            <label htmlFor="">Password : </label>
            <input type="password" name="" id="" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
           </div>
           <div>
            <button onClick={getdata}>Submit</button>
           </div>
        </form>

       
    </div>
  )
}

export default Registration