import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../MediaQuery";

export const Navigation = styled.nav`
  background: #222831;
  height: 85px;
  display: flex;
  border-bottom: 0.1rem solid
    ${(props) => (props.borderDisplay ? "#00ADB5;" : "#808080;")};

  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #eeeeee;
  background: #393e46;
  display: flex;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: 1rem;
  cursor: pointer;

  &.active {
    color: #00adb5;
  }

  &:hover {
    color: #00adb5;
  }

  ${media.smallPhone} {
    font-size: 1.5rem;
  }
`;

export const NavLinkSignUp = styled(Link)`
  color: #eeeeee;
  background: #393e46;
  display: flex;
  
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: 1rem;
  cursor: pointer;

  &.active {
    color: #00adb5;
  }

  &:hover {
    color: #00adb5;
  }

  ${media.smallPhone} {
    width: auto;
    font-size: 1.5rem;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;

  ${media.tablet} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #eeeeee;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

//-----------------------General Navigation Component styles ---//

export const StyledButton = styled.button`
  color: #eeeeee;
  background: #393e46;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0.2rem;
  cursor: pointer;
  float: right;
  


  &:hover {
    color: #00adb5;
  }
`;

export const StyledLogOutDiv = styled.div`



`;

export const StyledLabel = styled.label`
  color: #eeeeee;
  margin: 0.2rem;
  padding: 0.5rem;

  // ${!media.desktop} {
  //   margin-left: auto;
  //   margin-right: auto;
  //   font-size: 1.5rem;
  // }

  ${media.smallPhone} {
    display: block;
    font-size: 1.5rem;
  }
`;

export const StyledUserInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
  width: 25%;
  border-radius: 0.3rem;
  &:focus {
    box-shadow 0 0 10px #00ADB5;
  }

  

  // ${!media.desktop} {
  //   width: 75%;
  //   margin-left: auto;
  //   margin-right: auto;
  // }

  ${media.smallPhone} {
    width: 50%;
    height: 3rem;
  }

 

`;

export const StyledPasswordInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
  width: 25%;
  border-radius: 0.3rem;

  &:focus {
    box-shadow 0 0 10px #00ADB5;
  }


  // ${!media.desktop} {
  //   width: 75%;
  //   margin-left: auto;
  //   margin-right: auto;
  // }

  ${media.smallPhone} {
    width: 50%;
    height: 3rem;
  }

  
  
`;



export const StyledForm = styled.form`
text-align: right;




  ${media.smallPhone} {
    text-align: center;
  }
`;

export const StyledPropsbutton = styled.button`
  margin: 0.2rem;
  background: #393e46;
  color: #808080;
  border-radius: 0.3rem;
  color: ${(props) => (props.disabledFontColor ? "#00ADB5" : "#808080")};

  border-radius: 0.1rem;

  // ${!media.desktop} {
  //   margin-top: 1rem;
  //   margin-bottom: 1rem;
  // }

  ${media.smallPhone} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;
