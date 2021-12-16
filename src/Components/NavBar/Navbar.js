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
const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          {/* onClick trigger the toggle coming from home to show MobileIcon part */}
          <MobileIcon onClick={props.toggle}>
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
            <NavItem>
              <NavLinks to="discovery">Discovery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
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
