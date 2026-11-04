import { useState } from "react"
import {InputEmail, InputPassword} from "../layouts/inputs.jsx"
import { Link } from "react-router";

function LoginForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e)=>{
      e.preventDefault(); 
      const logData = {
        email : email,
        password : password
      }
    }
  return (
    <form action="#" onSubmit={handleSubmit}>
        <InputEmail setEmail={setEmail}/>
        <InputPassword name="Password" setPassword={setPassword}/>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
            <Link to="/register" >I don't have account?</Link>
        </div>
        
    </form>
  )
}

export default LoginForm