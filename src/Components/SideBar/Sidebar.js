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
            <SlidebarLink to="about" onClick={toggle}>About</SlidebarLink>
            <SlidebarLink to="discovery" onClick={toggle}>Discovery</SlidebarLink>
            <SlidebarLink to="services" onClick={toggle}>Services</SlidebarLink>
            <SlidebarLink to="signup" onClick={toggle}>Sign Up</SlidebarLink>
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
