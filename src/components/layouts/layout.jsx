// Layout.jsx — ta coquille actuelle d'App.jsx, déplacée ici
import { Outlet } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "./navbar";
import NavbarOut from "./navbarOut";

function Layout() {
  const { user } = useAuth();
  return (
    <>
      <header>{user ? <Navbar /> : <NavbarOut />}</header>
      <main><Outlet /></main>
      <footer>By  </footer>
    </>
  );
}
export default Layout;