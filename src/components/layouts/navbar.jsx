import { Link  } from "react-router";
import ThemeToggle from "./themeToggle";
function Navbar() {
    return (
        <nav>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/stats" >Stats</Link>
                <Link to="/history">History</Link>
                <Link to="/about">About</Link>
                <Link to="/profil">Profil</Link>
            </div>
            <ThemeToggle/>
        </nav>
    );
}
export default Navbar;