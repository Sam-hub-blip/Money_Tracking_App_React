import { Link,  } from "react-router";

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
        </nav>
    );
}
export default NavbarOut;