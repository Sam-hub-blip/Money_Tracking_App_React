import Navbar from "./components/layouts/navbar"
import NavbarOut from "./components/layouts/navbarOut"
import { useAuth } from "./hooks/useAuth"
import AppRoutes from "./routes/routes";
import { useTheme } from "./hooks/useTheme";
function App() {
  const { user } = useAuth();
  const { noNav } = useTheme();
  return (
    <>
      <header>
        {user === null ? <NavbarOut hidden={noNav}/>:<Navbar hidden={noNav} /> }
      </header>
      <main>
        <AppRoutes/>
      </main> 
      <footer>
        By Zongo Tinwinde Samuel & 
      </footer>
    </>
  )
}

export default App