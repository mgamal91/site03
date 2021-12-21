import React from "react";
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrapper,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
   /* react router already understod function */
 const toggleHome=()=>
 {
   scroll.scrollToTop();
 } 
 
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            {/* Wrapper01 */}
            <FooterLinksWrapper>
              {/* block1 */}
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How It Works</FooterLink>
                <FooterLink to="/">Tesimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Term Of Services</FooterLink>
              </FooterLinkItems>
              {/* block2 */}
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            {/* Wrapper02 */}
            <FooterLinksWrapper>
              {/* block1 */}
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
              </FooterLinkItems>
              {/* block2 */}
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instgram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          {/* Social Media */}

          <SocialMedia>
            <SocialMediaWrapper>
              <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
              <WebsiteRights>
                 
                 Miada Gamal &copy; {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                  <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook/>
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram/>
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube/>
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter/>
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin/>
                  </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrapper>
          </SocialMedia>
          {/* End of Social Media */}
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
