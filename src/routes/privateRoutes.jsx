import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet} from "react-router";


function PrivateRoutes() {
    const { user, loading } = useAuth();
    if(loading) return <h1>Loading ...</h1>
    if(!user){
        return <Navigate to="/login" replace/>
    }
    return <Outlet/> ;
}
export default PrivateRoutes;

