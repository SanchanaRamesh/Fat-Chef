import React ,{ useState} from 'react'

function Login() {
    const [userName,setuserName]= useState('');
    const[password,setpassword]= useState('');
    const[error,setError]=useState(false);
    const formHandler=(event)=>
    {
      event.preventDefault();
      if(userName.length==0 && password.length==0)
      {
        setError(true);
      }
      if(userName && password)
    {
        const loginObj={
        name:userName,
        pwd:password
    }

    console.log(loginObj);
    alert(JSON.stringify(loginObj));
}
}
  return (
    <div class ="form">
    <h2> Login Page </h2>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={userName} placeholder="username" onchange={(e)=>setuserName(e.target.value)}/> <br></br><pre></pre>
   {error && userName.length==0?
  <label style={{color:'red'}}>UserName is Required</label>:""}<br/>
    Password :<input type="password" value={password} placeholder="password" onChange={(e)=>setpassword(e.target.value)}/> <br></br><pre></pre>
    {error && password.length==0?
      <label style={{color:'red'}}>Password is Required</label>:""}<br/>
    <button > Login </button><pre></pre>
    <button>Submit</button>
    </form>
    </div>
  )
}

export default Login
