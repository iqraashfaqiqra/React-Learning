import Register from './Components/Register'
import Login from './Components/Login'
// import { useState } from 'react';

// function App() {
//   let [state,setstate]=useState({status:true});
//   const setState=(e)=>
//   {
//    e.preventDefault();
//    console.log(state.status)
//     setstate(!state.status);
//   }

//   return (
//     <>
//     {state.status? <Register fun={setState} />: <Login fun={setState}/>}
//     </>
//   );
// }

// export default App;
import React, { Component } from 'react'
import Show from './Components/Show'
import app from "./Components/Firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       set:true,
       email:null,
       password:null,
       ismatched:true
    }
  }
  setstate=(e)=>
  {
    e.preventDefault();
    this.setState({set:!this.state.set})
  }
  getformdata=(e)=>
  {
    e.preventDefault();
    const reset=e.target.reset.value;
    if(e.target.password.value===reset)
    {
      this.setState({email:e.target.email.value,password:e.target.password.value},()=>console.log(this.state)) 
      // createUserWithEmailAndPassword(auth,this.state.email,this.state.password).then(val=>console.log(val)).catch(val=>console.log(val))   
      createUserWithEmailAndPassword(auth,this.state.email,this.state.password).then(val=>
      {
        if(val)
        {
          this.setState({set:!this.state.set})
        }
      }
      )
    }
    else
    {
      alert("please Enter Correct Password")
    }
  }
  ShowData=(e)=>
  {
    e.preventDefault();
    console.log(e.target.email.value,e.target.password.value);
    signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value).then(val=>this.setState({ismatched:!this.state.ismatched})).catch(val=>console.log("error"))
  }
  google=(e)=>
  {
    const provider = new GoogleAuthProvider();
    console.log(e.target);
    signInWithPopup(auth, provider)
  }
  render() {
    return (
      <div>
         {this.state.set? <Register getdata={this.getformdata} fun={this.setstate}  googi={this.google}/>: 
         this.state.ismatched ?<Login showdata={this.ShowData} fun={this.setstate}/>:<Show/>
         }
      </div>
    )
  }
}
