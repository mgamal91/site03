import React from "react";
import { FaBars } from "react-icons/fa";
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
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            {/* from react icons */}
            <FaBars />
          </MobileIcon>
          {/* ul */}
          <NavMenu>
            {/* li */}
            <NavItem>
              {/* about is the id you want to scroll to */}
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            {/* end of li */}
            {/* li */}
            <NavItem>
              {/* about is the id you want to scroll to */}
              <NavLinks to="discovery">Discovery</NavLinks>
            </NavItem>
            {/* end of li */}
            {/* li */}
            <NavItem>
              {/* about is the id you want to scroll to */}
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            {/* end of li */}
            {/* li */}
            <NavItem>
              {/* about is the id you want to scroll to */}
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
            {/* end of li */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
