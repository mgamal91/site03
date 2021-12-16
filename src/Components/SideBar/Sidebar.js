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

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SlidebarWrapper>
          <SlidebarMenu>
            <SlidebarLink to="about">About</SlidebarLink>
            <SlidebarLink to="discovery">Discovery</SlidebarLink>
            <SlidebarLink to="services">Services</SlidebarLink>
            <SlidebarLink to="signup">Sign Up</SlidebarLink>
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
