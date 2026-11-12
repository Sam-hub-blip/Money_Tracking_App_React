import { Route,Routes } from "react-router";
import PrivateRoutes from "./privateRoutes";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import History from "../pages/History/History";
import Profil from "../pages/Profil/Profil";
import Stats from "../pages/Stats/Stats";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Layout from "../components/layouts/layout";

// routes.jsx — les pages d'auth HORS du Layout
function AppRoutes() {
  return (
    <Routes>
      {/* Sans navbar ni footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Avec navbar + footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/stats" element={<Stats />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRoutes;