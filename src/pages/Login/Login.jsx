import LoginForm from "../../components/UI/loginForm";
import { useTheme } from "../../hooks/useTheme";
// Pour après le design il faudra aller sur le branch login-design avant de push 
function Login() {
    const { noNav, setNoNav } = useTheme();
    setNoNav(true);
    return (
        <LoginForm setNoNav={setNoNav} />
    );
}
export default Login;
