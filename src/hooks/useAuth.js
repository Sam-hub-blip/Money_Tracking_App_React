import { useContext } from "react";
import { UserContext } from "../context/userContext/userContext";

export const useAuth = ()=>{
    const ctx = useContext(UserContext);
    if(!ctx) throw new Error(" useAuth doit etre utilisé dans un Provider");
    return ctx;
}