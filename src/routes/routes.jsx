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

function AppRoutes(){
    return (
        <Routes>
            //Routes publiques 
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<About/>}/>
            //Routes privées 
            <Route element={<PrivateRoutes/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/history"  element={<History/>}/>
                <Route path="/profil"  element={<Profil/>}/>
                <Route path="/stats"  element={<Stats/>}/>
            </Route>
            //Not found
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}
export default AppRoutes;