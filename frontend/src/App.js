import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Todo from "./Page/Todo";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Navbar from "./Page/Navbar";
import Contact from "./Page/Contact";
import Subscribe from "./Page/Subscribe";
import "./Styles/Home.css";
import "./Styles/Todo.css";
import "./Styles/Auth.css";


function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Routes>    
        
        <Route path="/home" element={<Home />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/subscribe" element={<Subscribe />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>  
         
      </Routes>
     
    </div>
  );
}

export default App;
