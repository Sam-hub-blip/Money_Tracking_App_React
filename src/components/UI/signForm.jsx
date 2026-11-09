import { useState } from "react"
import { InputPassword, InputEmail } from "../layouts/inputs.jsx"
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth.js";


function SignForm({}) {
    const {register} = useAuth();
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [PasswordError,setPasswordError] = useState(false);
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
        setPasswordError(true);
        return;
        }
        setPasswordError(false);
        let name = firstName +" "+ lastName;
        await register(name,email,password);

       
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
        <InputEmail setEmail={setEmail} /> {/* Se rendre de la fichier inputs.jsx pour le design  */}
        <InputPassword name="Enter your password" setPassword={setPassword}/> {/* Se rendre de la fichier inputs.jsx pour le design  */}
        <InputPassword name="Confirm your password" setPassword={setConfirmPassword}/> {/* Se rendre de la fichier inputs.jsx pour le design  */}
        {
            PasswordError &&  (
                <div>
                    Your passwords are differents!
                </div>
            )
        }
        <div>
            <button type="submit" >Sign</button>
        </div>
        <div>
            <Link to="/login">I already have an account?</Link>

        </div>
    </form>
  )
}

export default SignForm