import React, {useState, useEffect} from "react";
import { FaBars } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";
const Navbar = (props) => {
  const {toggle}=props;
  /* trigger transparent nav background */
  const [scrollNav, setScrollNav]=useState(false);
const changeNav=()=>
{
  if(window.scrollY >=80)
  {
    setScrollNav(true);
  }
  else
  {
    setScrollNav(false);
  }
}
useEffect(() => {
 window.addEventListener('scroll', changeNav);},[])

 /* end of changing the background of nav bar to transparent on top and after passing the height of it(80) it gets the color we want */
 /* react router already understod function */
 const toggleHome=()=>
 {
   scroll.scrollToTop();
 } 
 
 return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
          {/* onClick trigger the toggle coming from home to show MobileIcon part */}
          <MobileIcon onClick={toggle}>
            {/* from react icons */}
            <FaBars />
          </MobileIcon>
          {/* ul */}
          <NavMenu>
            {/* li */}
            <NavItem>
              {/* about is the id you want to scroll to */}
              {/* spy tells you which one you are clicking on so you can use this later to customize active class, -80 margin in the navbar hence the offset -80*/}
              {/* memo -80 was too big so changed it to -10, active class is from the NavbarElements &.active */}
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-10}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discovery" smooth={true} duration={500} spy={true} exact="true" offset={-10}>Discovery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true" offset={-10}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-10}>Sign Up</NavLinks>
            </NavItem>
            {/* end of li */}
          </NavMenu>
          {/* end of ul */}
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
