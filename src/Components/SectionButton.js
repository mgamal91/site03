import { Link as LinkScroll } from "react-scroll";
import styled from "styled-components";

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
  }
  
`;
