import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet} from "react-router";


function PrivateRoutes() {
    const { user } = useAuth();

    if(!user){
        return <Navigate to="/login" replace/>
    }
    return <Outlet/> ;
}
export default PrivateRoutes;

