import Navbar from "./components/layouts/navbar"
import NavbarOut from "./components/layouts/navbarOut"
import { useAuth } from "./hooks/useAuth"
import Routes from "./routes/routes";
function App() {
  const { user } = useAuth();
 
  return (
    <>
      <header>
        {user === null ? <NavbarOut/>:<Navbar/> }
      </header>
      <main>
        <Routes/>
      </main>
      <footer>
        By Zongo Tinwinde Samuel & 
      </footer>
    </>
  )
}

export default App