import LoginForm from "../../components/UI/loginForm";
import { useTheme } from "../../hooks/useTheme";
function Login() {
    const { noNav, setNoNav } = useTheme();
    setNoNav(true);
    return (
        <LoginForm setNoNav={setNoNav} />
    );
}
export default Login;