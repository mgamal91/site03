import React from "react";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  HomeButton,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./P404Elements";
/* import myImg from "../utils/media/p404_4.png"; */

const P404 = (props) => {
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
    dark2,
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
                  <HomeButton
                    to="/"
                    duration={500}
                    exact="true"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </HomeButton>
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

      {/* <div id="cloudsA" className="clouds"></div>
        <div id="cloudsB" className="clouds"></div> */}
      <h1 className="P404_header">Whoops</h1>
      {/* <img className="P404_img" src={myImg} alt="page404" /> */}
    </>
  );
};

export default P404;
