import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../screens/login";
import SignUp from "../screens/signup";

function AppRouter(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<SignUp/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}


export default AppRouter;