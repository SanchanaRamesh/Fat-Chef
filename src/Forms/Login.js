import React ,{ useState} from 'react'

function Login() {
    const [userName,setuserName]= useState('');
    const[password,setpassword]= useState('');
    const formHandler=(event)=>
    {
        const loginObj={
        name:userName,
        pwd:password
    }

    console.log(loginObj);
    alert(JSON.stringify(loginObj));
}
  return (
    <div class ="form">
    <h2> Login Page </h2>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={userName} placeholder="username" onchange={(e)=>setuserName(e.target.value)}/> <br></br><pre></pre>
    Password :<input type="password" value={password} placeholder="password" onChange={(e)=>setpassword(e.target.value)}/> <br></br><pre></pre>
    <button > Login </button><pre></pre>
    <button>Submit</button>
    </form>
    </div>
  )
}

export default Login
