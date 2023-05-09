import app from "./firebaseconfig";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {getDatabase, onValue,set,ref} from "firebase/database"

let auth = getAuth(app);
let db = getDatabase(app);

let userSignUp=(obj)=>{
    return new Promise((resolve,reject)=>{
        createUserWithEmailAndPassword(auth,obj.email,obj.password)
        .then((res)=>{
            obj.id = res.user.uid
            let reference = ref(db,`users/${obj.id}`)
            set(reference,obj)
            .then(()=>{
                resolve("Data sent successfully")
            })
            .catch((err)=>{
                reject(err.message)
                console.log(err.message)
            })
        })
        .catch((err)=>{
            reject(err.message)
            console.log(err.message)      
        })
    })
}


let userLogIn=(obj)=>{
    return new Promise((resolve,reject)=>{
        signInWithEmailAndPassword(auth,obj.email,obj.password)
        .then((res)=>{
           let id = res.user.uid
           let reference = ref(db,`users/${id}`)
           onValue(reference,(dt)=>{
            if(dt.exists()){
                resolve(dt.val())
            }else{
                reject("No data found")
            }
           })

        })
        .catch((err)=>{
            reject(err)
            console.log(err)
        })
    })
}


let checkAuth=(obj)=>{
    return new Promise((resolve,reject)=>{
        onAuthStateChanged(auth,(dt)=>{
            if(dt){
                let id = dt.uid
                resolve(id)
            }else{
                reject("user not logged in")
            }
        })
    })
}

let userSignOut=()=>{
    return signOut(auth)
}


export {userSignUp,userLogIn,checkAuth,userSignOut};