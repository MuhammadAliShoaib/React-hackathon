import { useEffect } from "react";
import { checkAuth } from "./firebasemethods";

const { useNavigate } = require("react-router-dom");

function ProtectedRoute({Component}){
    let navigate = useNavigate();

    useEffect(()=>{
        checkAuth()
        .then((user)=>{
            console.log('User already logged in')
            
        }).catch(()=>{
            navigate("/login")
        })

    },[])

    return(
        <Component/>
    )
}

export default ProtectedRoute;