// Installing React 
        /*
        npx create-react-app project
        cd project
        npm start
        */
// React Component 
        /*
        1-Class Based Component 
        2-Function Based Component
        */
//Class Based Component
         /*
         import React from 'react'
         Class Project extends React.Component
         {
          render(
          return(
          <>
          <h1>Hello World</h1>
          </>
          )
          )
         }
          export default Project
          */
//Function Based Componet 
         /*
         export default function Project()
         {
            return(
            <>
            <h1>Hello</h1>
            </>
            )
         }
        */
//Props
        /*
        ->React is Component based Library which divides UI into little reusable pieces.
        ->In some Cases, those component need to commuincate(send data to each other) and the way to pass data between components is by using props.
        ->parent to child data send.
        ->children can use props data but can't be modified.
        */
// Class Based Props 
            /*
            import React from 'react';
            class Person extends React.Component
            {
                constructor(props)
                {
                    super(props);
                    this.props=props;
                }
                render()
                {
                    return(
                        <> 
                        <h1>My Name Is {this.props.name} and my age is {this.props.age}</h1>
                        </>
                    )
                }
            }
                export default Person
                        ..............................
                        <Person name="Iqra" age="25" />
                */
//Function Based
                /*
                const Person=(props)=>
                    {
                        console.log(props)
                        return(
                            <>
                            <h1>My age is {props.name} and age is {props.age}</h1> 
                            </>
                        )
                    }
                export default Person;
                ......................
                <FunctionPerson name="Amna" age="40"/>
                */
//State
/*
State Is built-in Object of React Component
Function is stateless Component(if we want to use state then we use hook).
*/
// Class Based State 
              /*
              import React from "react"
              class Project extends React.Component
              {
               constructor()
               {
                 super();
                 this.state={
                 name:"iqra",
                 age:10
                 }
               }
                Chnage()
                {
                 this.setstate({name:"Ayesha",age:10});
                }
                render()
                {
                return(
                <>
                <h1>{this.state.name} and age {this.state.age}</h1>
                <button onclick={()=>{this.change()}}>Update</button>
                </>
                ) 
                }
              }
            */
//Function Based Hook

            // import { Component } from "react"

            /*
            import React, { useState } from 'react'

            export default function Person() {
                let [text,settext]=useState('Iqra');
            return (
                <div>
                <h1>{text}</h1>
                <button onClick={()=>settext("Ayesha")}>Change</button>
                </div>
            )
            }
            */
// Event Handling With Class Based Component 
//............1st Method.............
            /*
            constructor()
            {
                super()
                this.state={
                name:"Iqra",
                age:"25"
                }
            }
            BtnChnge()
            {
                console.log(this.state)
            }
            render()
            {
            return(
            <>
            <button onClick={()=>this.BtnChnge()}>Click Me</button> 
            </>
            )
            }  
            */
//............2nd Method.............
// { <button onClick={this.BtnChnge.bind(this)}>Click Me</button>  }
//...........3rd Method
/*
            constructor()
            {
                super()
                this.state={
                name:"Iqra",
                age:"25"
                }
                this.BtnChnge=this.BtnChnge.bind(this);
            }
            BtnChnge()
            {
                console.log(this.state)
            }
            render()
            {
            return(
            <>
            <button onClick={this.BtnChnge}>Click Me</button> 
            </>
            )
            }  
            */
//......4th Method.................
/*
            constructor()
            {
                super()
                this.state={
                name:"Iqra",
                age:"25"
                }
            }
            BtnChnge=()=>
            {
                console.log(this.state)
            }
            render()
            {
            return(
            <>
            <button onClick={this.BtnChnge}>Click Me</button> 
            </>
            )
            }  
            */
//Rendering List with class 
            /*
            Class App extends React.component{
              constructor()
              {
                super();
                this.state={
                  person:[
                         {id:1,name:"iqra",age:25},
                         {id:2,name:"Ayesha",age:20},
                         {id:3,name:"Fatima",age:30}
                        ]
                }
              }
                render()
                {
                  this.state.map(el=>{
                     return(
                            <Person name={el.name} age={el.age}/>
                           )
                    })
                }
            }
            */
           /*Person.jsx
                constructor(props){
                    super(props);
                    this.props=props;
                }
                render()
                {
                    <h1>my Name is {this.props.name}</h1>
                }
           */
//Rendering List with function
                /*
                const person=
                [
                {id:1,name:"iqra",age:25},
                {id:2,name:"Ayesha",age:20},
                {id:3,name:"Fatima",age:30}
                ]
                return(
                <>
                {person.map(ele=>{
                    return(
                    <Person name={ele.name} age={ele.age}/>
                    )
                })}
                </>
                ) 
                */
               /*
                const Person=(props)=>
                {
                return(
                    <>
                    <div className={mod.con}>
                        <h3>my Name is {props.name}</h3>
                        <h3>my Age is {props.age}</h3>
                    </div>
                    </>
                )
                }
                */
// ........................................
// Form Handling.
/*
1st(Access Input value when user enter text in text_Box)
                chnage=(e)=>{
                    console.log(e.target.value);
                    }
                render()
                {
                  return(
                         <>
                            <form>
                              <input type="text" onChange={this.change}/>
                              <select onChange={this.chnage}>
                                 <option value="Pakistan">Pakistan</option>
                                 <option value="Lahore">Lahore</option>
                              </select>
                            </form>
                         </>
                         )
                }
->2nd(Access Input Value when user enter Submit Button)
           this.state={
           text:null,
           option:null
           }
           fun=(e)=>
           {
              e.preventDefault();
              const text=e.target.text.value;
              const option=e.target.option.value;
              this.setstate({text,option},()=>{console.log(this.state)});
              e.target.text.value="";
            }
            render()
            {
              return(
                      <>
                          <form>
                           input type="text" name="text";
                            <selection name="option">
                              option 
                            </selection>
                            <button>Submit</button>
                          </form>
                      </>
                    )
            }
 .........................................
->3 (controlled componet .....input value will set from Set Function)
        this.state={text:""}
        change=(e)=>
        {
            const text=e.target.value;
        }
        <input type="text" name="text" value={this.state.text} onChange={this.change}
*/
// ..............................................
/*
How to Create a Registration Form using Greeting Screen
index.js
         <Registeration />
Registeration.jsx
            import React, { Component } from 'react'
            import css from "./Registeration.module.css"
            import Greeting from './Greeting';

            export class Registeration extends Component { 
            constructor(props) {
                super(props)
                this.props=props;
                this.state={
                name:"",
                email:"",
                password:"",
                isrequired:false,
                }
            }
            submit=(e)=>
            {
                alert("ge")
                e.preventDefault();
                const name=e.target.name.value;
                const email=e.target.email.value;
                const password=e.target.password.value;
                this.setState({name,email,password,isrequired:true},()=>console.log(this.state))
                }
            
            render() {
                return (
                <>
                {this.state.isrequired?<Greeting/>:
                    <div className={css.div}>
                    <form onSubmit={this.submit}>
                            <h1 className={css.h1}>Register</h1>
                        <div>
                        <label htmlFor="" className={css.red}>Name:</label>
                        <input type="text" name="name" />
                        </div>
                        <div>
                            <label htmlFor="">Email:</label>
                            <input type="email" name="email"/>
                        </div>
                        <div>
                            <label htmlFor="">Password:</label>
                            <input type="password" name="password"/>
                        </div>
                        <div>
                            <textarea name="" id=""  rows="10"></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                    </div>
                }
                </>
                )
                }
            }
            
            export default Registeration
 Greeting.jsx
            import React, { Component } from 'react'
            import Css from './Greeting.module.css'
            export class Greeting extends Component {
            render() {
                return (
                <div>
                    <h1 className={Css.h1}>Thanks for Registeration</h1>
                    <h1 className={Css.h3}>Congratulation!You have been registered.</h1>
                </div>
                )
            }
            }

            export default Greeting
*/
// ..........................
// Dynamic Css 
/*
         export default function App()
         {
            let cssClass=["btn",'mt-5'];
            let [state,setState]=useState(false);
            if(state)
            {
                cssClass.push("btn-danger");
            }
            else
            {
                cssClass.push("btn-primary");
            }
            return(
                <>
                <Button className={cssClass.join(" ")}>Show Password</button>  //Join Basic convert array to string
                </>
            )
         }
         */
// ..................................
// Styled Component 
/*
1-go to style component website
 2-npm install --save styled-components.
 3-import Styled from "styled-components"

         const styledBtn=Styled.button `
         display:block;
         padding:10px solid red;
         color:green;         
         `
        return(
            <>
             <styledBtn type="button">Login</styledBtn>
            </>
        )
        
 */
// Hover & media Properties
/*
        const hoverProperty=Style.div`
         &:hover {
         color:red
         }
         @media (min-width:200px) and (max-width:600px)
         {
            width:50px;
         }
        `

*/
//Props in Error Function
/*
          const styledBtn=Styled.button `
         display:block;
         padding:10px solid &{props=>props.color};
         color:green;         
         `
        return(
            <>
             <styledBtn type="button">Login</styledBtn>
            </>
        )    
...................................
Customized Button when flag 1 then 50% otherwsie 100%
       const styledBtn=Styled.button `
         display:&{props=>props.flag?"inline":"block"};
         width:&{props=>props.flag?"50%":"100%"}
         padding:10px solid &{props=>props.color};
         color:green;         
         `
        return(
            <>
             <styledBtn flag="1" type="button">Login</styledBtn>
             <styledBtn flag="1" type="button">Logout</styledBtn>
             <styledBtn flag="0" type="button">Save</styledBtn>
            </>
        )    
*/