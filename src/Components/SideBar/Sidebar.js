import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SlidebarLink,
  SlidebarMenu,
  SlidebarWrapper,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElements";

const Sidebar = (props) => {
  const {toggle,isOpen}=props;
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SlidebarWrapper>
          <SlidebarMenu>
            <SlidebarLink to="about" onClick={toggle}  smooth={true} duration={500} spy={true} exact="true" offset={-10}>About</SlidebarLink>
            <SlidebarLink to="discovery" onClick={toggle}  smooth={true} duration={500} spy={true} exact="true" offset={-10}>Discovery</SlidebarLink>
            <SlidebarLink to="services" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-10}>Services</SlidebarLink>
            <SlidebarLink to="signup" onClick={toggle}  smooth={true} duration={500} spy={true} exact="true" offset={-10}>Sign Up</SlidebarLink>
          </SlidebarMenu>
          <SideBtnWrap>
              {/* react router link hence the / */}
              <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SlidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
