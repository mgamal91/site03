import React, { useState } from "react";

/* import myImg from "../utils/media/p404_4.png"; */
import Navbar from "./NavBar/Navbar";
import Sidebar from "./SideBar/Sidebar";

const P404 = () => {
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
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <div id="cloudsA" className="clouds"></div>
        <div id="cloudsB" className="clouds"></div> */}
      <h1 className="P404_header">Whoops</h1>
      {/* <img className="P404_img" src={myImg} alt="page404" /> */}
    </div>
  );
};

export default P404;
