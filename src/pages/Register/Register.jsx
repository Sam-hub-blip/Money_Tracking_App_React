import { useState } from "react";
import SignForm from "../../components/UI/signForm";
import { useTheme } from "../../hooks/useTheme";
function Register() {
    const { noNav,setNoNav} = useTheme();
    setNoNav(true);
    return (
        <SignForm  />
    );
}

export default Register;