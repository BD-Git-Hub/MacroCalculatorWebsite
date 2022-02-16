import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const media = {
  largeDesktop: '@media (min-width: 1200px)',
  desktop: '@media (min-width: 992px)',
  tablet: '@media (max-width: 768px)',
  phone: '@media(min-width: 576px)'

}

export const Nav = styled.nav`
  background: #222831;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #EEEEEE;
  background: #393E46;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: 1rem;
  
  cursor: pointer;
  &.active {
    color: #00ADB5;
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
  align-items: center;
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
  align-items: center;
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
  background: #EEEEEE;
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

export const StyledButton = styled.button`

color: #EEEEEE;
background: #393E46;
border-radius: 1rem;
padding: 0.5rem;
margin: 0.2rem;


cursor: pointer;
  &:hover {
    color: #00ADB5;
  }


`;

export const StyledPropsbutton = styled.button`

margin: 0.2rem;
background: #393E46;
color: #808080;
color: ${(props) => (props.disabledFontColor ? '#00ADB5' : "#808080")};

border-radius: 0.1rem;

#808080 //grey
#00ADB5 //blue
#222831 //darkgrey


`;

export const StyledLabel = styled.label`

color: #EEEEEE;
margin: 0.2rem;
padding: 0.5rem;



`;


export const StyledUserInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
  &:focus {
    box-shadow 0 0 10px #00ADB5;
  }
`;

export const StyledPasswordInput = styled.input`
  border: 0.1rem solid ${(props) => (props.focusColor ? "red" : "grey")};
  &:focus {
    box-shadow 0 0 10px #00ADB5;
  }
`;






