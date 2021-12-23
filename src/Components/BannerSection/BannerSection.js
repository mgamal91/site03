import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  BannerBackground,
  BannerBtnWrapper,
  BannerContainer,
  BannerContent,
  BannerH1,
  BannerP,
  VideoBackground,
} from "./BannerSectionElements";
import Video from "../../utils/videos/vid2.mp4";
import { Button } from "../SectionButton";
const BannerSection = () => {
  /* name we used here is hover
    {hover ? <ArrowForward/>:<ArrowRight/>}
     */
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      {/* inside id put the part where you want to jump to */}
      <BannerContainer id="home">
        <BannerBackground>
          {/* Video by Treedeo Footage from Pexels */}
          {/* https://www.pexels.com/video/police-officer-monitoring-security-camera-while-looking-at-the-monitor-screen-7255101/ */}
          <VideoBackground
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          ></VideoBackground>
        </BannerBackground>
        <BannerContent>
          <BannerH1>Virtual Banking Made Easy</BannerH1>
          <BannerP>Hello</BannerP>
          <BannerBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-10}

            >
              Get Started Today! {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </BannerBtnWrapper>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default BannerSection;
