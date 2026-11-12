import { Link,  } from "react-router";
import ThemeToggle from "./themeToggle";

function NavbarOut() {
    return (
        <nav>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            <ThemeToggle/>
        </nav>
    );
}
export default NavbarOut;