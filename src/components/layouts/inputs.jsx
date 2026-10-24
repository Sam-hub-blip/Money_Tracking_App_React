import { useState } from "react"
import infoIconRed from "../../assets/images/icon-info.svg"

 export function InputEmail({setEmail}) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [error,setError] = useState(false);

    const handleEmailChange = (event) => {
        const userValue = event.target.value;
        setError(false) 
        if (userValue.length > 0 && !emailRegex.test(userValue)) {
            setError(true);
        }
        else{
            setError(false);
            setEmail(userValue);
  
        }
    };
  return (
    <div>
        <label htmlFor="email">Email address: </label>
        <input type="text" name="email" id="email" onChange={handleEmailChange}/>
        {
            error && (
            <div className="flex gap-0.5 items-center"  >
                <img src={infoIconRed} alt="info-icon" className="h-4"/>
                <p className="text-sm text-red-600">Please enter a valid email!</p>
            </div>
            )
        }
    </div>
  )
}

export function InputPassword({name, setPassword}) {
    const [toggle,setToggle] = useState(false);
  return (
    <div>
        <label htmlFor={name} > </label>
        <div>
            <input type={toggle? "text": "password"} name={name} id={name} onChange={(e)=> setPassword(e.target.value) } />
            <button onClick={()=>setToggle(!toggle)}>
                {toggle? "hide" : "show"}
            </button>
        </div>
    </div>
  )
}
