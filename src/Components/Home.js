import React, { useState } from "react";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./AboutUsSection/Data";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./NavBar/Navbar";
import Services from "./Services/Services";
import Sidebar from "./SideBar/Sidebar";

const Home = () => {
  //use state
  //isOpen is the name i gave in the SidebarElements
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; */
  //set whatever you name
  const [isOpen, setIsOpen] = useState(false);
  //update the state from false to true and visevers(will return true or false)
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection/>
      {/* get and spread all the content of homeObjOne(data file) */}
      <AboutUsSection {...homeObjOne}/>
      <AboutUsSection {...homeObjTwo}/>
      <Services/>
      <AboutUsSection {...homeObjThree}/>
      
      
    </>
  );
};

export default Home;
