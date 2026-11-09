import { useState } from "react"
import {InputEmail, InputPassword} from "../layouts/inputs.jsx"
import { data, Link } from "react-router";
import { useAuth } from "../../hooks/useAuth.js";
import { Navigate } from "react-router";

function LoginForm( { setNoNav }) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { login } = useAuth();

    const handleSubmit = async (e)=>{
      e.preventDefault(); 
      const logData = {
        email : email,
        password : password
      }
      try {
        await login(data);
        setNoNav(false);
        <Navigate to="/dashboard" replace/>
      } catch (error) {
        throw new Error("",error);
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
        <input type="text" />
    </form>
  )
}

export default LoginForm