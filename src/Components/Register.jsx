import React from 'react'
import './Register.css'

export default function Register(props) {
  return (
    <div>
        <form action="Post" onSubmit={props.getdata} className="form">
            <h1>Create Account</h1>
            <p>Get Started with your free account.</p>
            <button type="button"  className="primary" onClick={props.googi}>Signup Via Google</button>
            <button type='button' className="blue">Signup Via FaceBook</button>
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
            <div>
                <input type="password" name="reset" id="" placeholder='Re-Enter Password'/>
            </div>
            <button type="submit" className="primary">Create Account</button>
             <p>Have an account? <a  href="#" onClick={props.fun} >Login</a></p>
        </form>
    </div>
  )
}
