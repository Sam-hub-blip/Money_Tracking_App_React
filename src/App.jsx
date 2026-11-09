import Navbar from "./components/layouts/navbar"
import NavbarOut from "./components/layouts/navbarOut"
import { useAuth } from "./hooks/useAuth"
import AppRoutes from "./routes/routes";
import { useTheme } from "./hooks/useTheme";
import Card from "./components/layouts/card";
function App() {
  const { user } = useAuth();
  const { noNav } = useTheme();
  let tab = [{text: "Current balance",amount: 250000
  },
  {text: "expense",amount: 20000
  },
  {text: "incomes",amount: 240000
  },
]
  return (
    <>
      <header>
        {user === null ? <NavbarOut hidden={noNav}/>:<Navbar hidden={noNav} /> }
      </header>
      <main>
        <AppRoutes/>
      </main> 
      <footer>
        
      </footer>
    </>
  )
}

export default App