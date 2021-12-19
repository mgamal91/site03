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
  const {
    id,
    lightBg,
    imgStart,
    topLine,
    headLine,
    lightText,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
  } = props;
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          {/* where imagw will be */}
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {/* spy={true}  offset is the value of Nav  margin-top: -80px;*/}
                  {/* aproblem with the comp itself it doesnt understand true or false directly, so if primary have a value(true) the return 1(true) not  0(false)*/}
                  <Memo
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1:0}
                  >
                    {buttonLabel}
                  </Memo>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutUsSection;
