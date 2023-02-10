import React from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import ProjectsList from "./Components/ProjectsList"
import SkillSet from "./Components/SkillSet";





const Container =()=>{
  
  return (
    <div className="container mx-auto">
      <Navbar/>
      <Main/>
      <SkillSet/>
      <ProjectsList/>
      
     
    </div>
  );
} 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Container/>)