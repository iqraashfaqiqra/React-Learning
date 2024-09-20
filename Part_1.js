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