import { useState } from "react"
import { InputPassword, InputEmail } from "../layouts/inputs.jsx"

function SignForm({setData}) {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [PasswordError,setPasswordError] = useState(false);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (password != confirmPassword){
            setPasswordError(true);
            return;
        }
        setConfirmPassword(false);
        setData({
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password
        })
    }
  return (
    <form action="#" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstName" >Enter your first name</label>
            <input type="text" name="firstName" id="firstName" onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="lastName">Enter your last name</label>
            <input type="text" name="lastName" id="lastName" onChange={(e)=> setLastName(e.target.value)} />
        </div>
        <InputEmail setEmail={setEmail} />
        <InputPassword name="Enter your password" setPassword={setPassword}/>
        <InputPassword name="Confirm your password" setPassword={setConfirmPassword}/>
        {
            PasswordError &&  (
                <div>
                    Your passwords are differents!
                </div>
            )
        }
        <div>
            <button type="submit" disabled={ !(lastName.trim()=="" && firstName.trim()=="" && email.trim()=="" && password.trim()=="")}>Sign</button>
        </div>
        <div>
            <p>I already have an account?</p>
        </div>
    </form>
  )
}

export default SignForm