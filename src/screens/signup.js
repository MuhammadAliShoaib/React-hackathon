import { Box, Grid } from "@mui/material";
import SMInput from "../components/SMinput";
import '../App.css';
import SMButton from "../components/SMButton";
import { userSignUp } from "../config/firebasemethods";
import { useState } from "react";

function SignUp() {

    const [email,setEmail] = useState();
    const [name,setName] = useState();
    const [password,setPassword] = useState("");

    let change = ()=>{
        let model = {
            name:name,
            email:email,
            password:password
        }
        enter(model)
    }

    let enter = (obj)=>{
        userSignUp(obj).then((res)=>{
            console.log("Signed up successfully")
        }).catch((err)=>{
            console.log(err.message)
        })
    }


    return (
        <>
            <Box className="fullpage">
                <Box>
                    <Grid container >
                        <Grid item md={4}></Grid>
                        <Grid item md={4} className=" d-flex justify-content-center align-item-center ">
                            <div className="text-center border shadow p-3  rounded">
                                <h3>SignUp</h3>
                                <div >
                                    <SMInput placeholder="Name" divClass="d-flex flex-column" inputClass="inputClass" action={setName} />
                                    <SMInput placeholder="Email" divClass="d-flex flex-column" inputClass="inputClass" action={setEmail}/>
                                    <SMInput placeholder="Password" divClass="d-flex flex-column" inputClass="inputClass" action={setPassword} />
                                    <SMButton onClick={change} label="Sign up" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={4}></Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}

export default SignUp;