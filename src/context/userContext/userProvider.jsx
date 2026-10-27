import { UserContext } from "./userContext";
import { useState, useEffect } from "react";

export const UserProvider = ({ children})=>{
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const token  = localStorage.getItem("token");
        if(!token){
            setLoading(false);
            return;
        }
        fetch("",{
            headers: { Authorization : `Bearer ${token}`}
        })
        .then((res) => (res.ok? res.json() : Promise.reject()))
        .then(setUser)
        .catch(()=> localStorage.removeItem("token"))
        .finally(() => setLoading(false));
    },[]);

    const login = async (email,password) =>{
        const res  = await fetch("",{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({email,password}), 
        });
        if(!res.ok) throw new Error("Identifiants invalides");
        const {token, user} = await res.json();
        localStorage.setItem('token',token);
        setUser(user);
    }
    const logout = () =>{
        localStorage.removeItem('token');
        setUser(null);
    }
    const register = async (name,email,password) =>{
        try{
            const res = await fetch("",{
                method: "POST",
                headers :  { "Content-Type" : "application/json"},
                body : JSON.stringify({name, email, password}),
            });

            const { token, user} = await res.json();
            localStorage.setItem('token',token);
            setUser(user);
        }
        catch(error){
            console.log("Echec inscription : ",error);
            
        }
    }
    return(
        <UserContext.Provider value={{user, login, logout, register, loading, isAuthenticated : !!user}} >
            {children}
        </UserContext.Provider>
    )
}