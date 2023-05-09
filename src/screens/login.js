import { Box, Grid } from "@mui/material";
import SMInput from "../components/SMinput";
import '../App.css';
import SMButton from "../components/SMButton";
import { useNavigate } from "react-router-dom";
import { userLogIn } from "../config/firebasemethods";
import { useState } from "react";

function Login() {

    const [model,setModel] = useState({});
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    let enter = (obj)=>{
        userLogIn(obj).then((res)=>{
            console.log("Logged In successfully")
        }).catch((err)=>{
            console.log("Error faced")
        })
    }

    let change = ()=>{
        setModel({
            email:email,
            password:password
        })
        enter(model)
    }

    let navigate = useNavigate();

    let direct = () => {
        navigate("/signup")
    }

    return (
        <>
            <Box className="fullpage">
                <Box>
                    <Grid container >
                        <Grid item md={4}></Grid>
                        <Grid item md={4} className=" d-flex justify-content-center align-item-center ">
                            <div className="text-center border shadow p-3 pb-2 rounded">
                                <h3>Login</h3>
                                <div >
                                    <SMInput placeholder="Email" divClass="d-flex flex-column" inputClass="inputClass" action={setEmail} />
                                    <SMInput placeholder="Password" divClass="d-flex flex-column" inputClass="inputClass" action={setPassword}/>
                                    <SMButton onClick={change} label="Sign in" />
                                </div>
                                <p className="mt-3">Not a member? <span onClick={direct} className="text-primary user-select-none m-2">Register</span></p>
                            </div>
                        </Grid>
                        <Grid item md={4}></Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}

export default Login;