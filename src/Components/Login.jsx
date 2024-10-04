import React from 'react'
import css from './Login.module.css'

export default function Login(props) {
    console.log(props)
  return (
    <div>
        <form action="" className="form" onSubmit={props.showdata}>
            <h1>Login</h1>
            <button type="button" className="primary">Signup Via Twitter</button>
            <button className="blue">Signup Via Google</button>
            <div className="hr">
                <hr className="hrs"/>
                <p>OR</p>
            </div>
            <div>
                <input type="email" name="email" placeholder='Email'/>
            </div>
            <div>
                <input type="password" name="password" id=""  placeholder='Password'/>
            </div>
            <button type="submit" className="primary">Login</button>
             <p><a href="#"  onClick={props.fun}>Create</a> an account</p>
        </form>
    </div>
  )
}
