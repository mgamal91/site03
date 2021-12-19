import React from "react";
/* memo is my naming to the button */
import { Button as Memo } from "../SectionButton";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./AboutUsSectionElements";
const AboutUsSection = (props) => {
  const {id, lightBg, imgStart, topLine, headLine, lightText, darkText, description, buttonLabel, img, alt}=props;
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          {/* where imagw will be */}
          <InfoRow imgStart={imgStart} >
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Memo to="home">{buttonLabel}</Memo>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutUsSection;
