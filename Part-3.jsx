//Routing 
/*
Configuring Routes.
    npm i react-router-dom
    index.jsx
        import {BrowserRouter} from 'react-router-dom';
        <BrowserRouter>
          <App/>
        </BrowserRouter/>
    App.jsx
         import {Routes,Route} from "react-router-dom"
         import Home from './component/Home'
         import Service from './component/Service'
           return(
                 <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='service' element={<Servive/>}/>
                 </Routes>
           )
    2 pages create home.jsx / service.jsx
    By Default Home oage open when http://localhost:3000/service (service page open)
*/
// ..............
/*
we don't to chnage url manually.we want when user click link then change Page.
       navbar.jsx
            <li><Link to='/>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='gallery'>Gallery</Link></li>
NavLink add active class 
           <li><NavLink to='/'>Home</NavLink></li>

 */
// ......................
/*
new Page open when user Click on Button 
  App.jsx
    <Route Path='button' element={<Button/>}/> 
  Home.jsx
    import {useNavigation} from 'react-router-dom'
    const navigation=useNavigation();
    return(
       <button onClick={()=>Navigation('button')}>Place Order</button>
    )
  Button.jsx
     import {useNavigation} from 'react-router-dom'
    const navigation=useNavigation();
    <h1>Order confirmed</h1>
    <button on Click=(()=>Navigation(-1))>Go Back</button>
*/
// ....................
/*
No Found Route
        nofound.jsx
            <h1>No page Found</h1>
        app.jsx
             <Route path="*" element={<nofound/>}/>

*/