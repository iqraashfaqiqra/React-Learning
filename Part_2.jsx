// FireBase
// FireBase is online platform Where website base data,android data store.
// ...............
//Website
/*
.open Firebase->go to console ->create project-> </> ->Register App -> Copy Sdk.
.create react project folder on computer->npm install firebase .
.create Firebaseconfig.jsx and paste copy Sdk  and export app.
.RealTime databas->copy URL
.go to Paste Sdk in firebaseconfig.jsx and {databaseURL:"paste URL"}
.index.jsx
    import {getDatebase,ref,set} from 'firebase/database';
    import app from './firebase'

    const db=getDatabase(app);
    const fun=()=>
    {
        set(ref(db,"user/push"),{
        id:1,
        name:"iqra",
        age:20
                                })
    }
   return(
   <>
   <button oncLick={fun}>Save</button>
   </>
   )
*/
// ...............................
/*
Get authenticate with Email and password.
website firebase->authenticate->email and password ok.
index.jsx
        import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
        import app from './firebase'

        const auth = getAuth(app);
        const fun=()=>
        {
          createUserWithEmailAndPassword(auth,"iqraashfaq63@gmail.com","123@") //Giving Hard quoted value.
        }
*/
// ...................
/*
Sign In Authentication
            import React, { useState } from 'react'
            import './Signup.css'
            import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
            import app from './Firebase'
            const auth=getAuth(app);

            export default function SignIn() {
                let [email,setemail]=useState(" ");
                let [password,setpassword]=useState(" ");
                const sub=()=>
                {
                    console.log(email,password)
                    signInWithEmailAndPassword(auth,email,password).then(val=>console.log(val,"Sucees")).catch(val=>console.log(val,"Error"))
                }
              
              return (
                <div>
                        <div>
                        <label htmlFor="">Email:</label>
                        <input type="email" name="email" value={email} onChange={e=>setemail(e.target.value)} id="" />
                        </div>
                        <div>
                            <label htmlFor="">Password:</label>
                            <input type="password" name="password" id="" value={password} onChange={e=>setpassword(e.target.value)} />
                        </div>
                        <button onClick={sub}>SignIn</button>
                </div>
              )
            }
*/
// ...................
