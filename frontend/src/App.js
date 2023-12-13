import React, { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { Routes,Route } from 'react-router-dom';
// import Products from "./components/Products";
import Products from "./components/Products";
import Style from "./components/Style.css"
import Productsb from "./components/Productsb";
// import { Form, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Productsa from "./components/Productsa"
import Register from "./components/Register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import CallBack from "./components/CallBack";

function App() {
  const [add, setadd] =useState(0);
  const Learning = useCallback(
    ()=>{
    
    },[]
  )
  return (
   <>
   <Navbar></Navbar>
   <Routes>
    <Route path="/Register" element={<Register/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Products" element={<Products/>}></Route>
    <Route path="/Productsb" element={<Productsb/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/productsa" element={<Productsa/>}></Route>
   </Routes>
   {/* <Products></Products> */}
   <ToastContainer/>
   <div className="App">
     <h1>CallBack function</h1>
     <CallBack Learning={Learning}/>
     <h1>{add}</h1>
     <button onClick={()=>setadd(add+1)}>addition</button>
   </div>
   </>
  );
}

export default App;

// import {useState, createContext, useContext} from "react";

// const UserContext= createContext();

// function Component1(){

//   const [user,setuser] = useState("Aliyas muhammad");

//   return(
//     <UserContext.Provider value = {user}>
//       <h1>Hello ${user}!</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }
// function Component2(){
//   return(
//     <>
//     <h1>component2</h1>
//     <Component3 />
//     </>
//   );
// }
// function Component3(){
//   return(
//     <>
//     <h1>component3</h1>
//     <Component4 />
//     </>
//   );
// }
// function Component4(){
//   const user = useContext(UserContext);
//   return(
//     <>
//     <h1>component4</h1>
//     <h2>HELLO {user}! again</h2>
//     </>
//   )
// }
// export default Component1;