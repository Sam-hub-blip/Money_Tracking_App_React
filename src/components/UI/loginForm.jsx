import { useState } from "react"
import InputEmail from "../layouts/inputs.jsx"
import InputPassword from "../layouts/inputs.jsx"


function LoginForm({setData}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = ()=>{
      setData({
        email : email,
        password : password
      })
    }
  return (
    <form action="#" onSubmit={handleSubmit}>
        <InputEmail setEmail={setEmail}/>
        <InputPassword name="Password" setPassword={setPassword}/>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
            <p>I don't have account?</p>
        </div>
        
    </form>
  )
}

export default LoginForm