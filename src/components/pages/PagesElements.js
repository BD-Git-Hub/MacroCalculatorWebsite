import styled from "styled-components";
import { media } from "../MediaQuery";


export const StyledDiv = styled.div`
  
  display: block;
  text-align: center;
`;

export const StyledSelect = styled.select`
width: 10%;
padding: 1rem 0 1rem 0;
font-size: 1rem;
color: white;
background-color: #393E46;
text-align: center;
border-radius: 0.3rem;

&:focus {
  box-shadow 0 0 10px #00ADB5;
  
}

${media.desktop} {
  width: 40%;
  font-size: 1.4rem;

}

${media.tablet} {
  width: 40%;
  
  font-size: 1.4rem;
}

${media.largePhone} {
  font-size: 1.5rem;

  width: 45%;
}


`;

export const StyledSubmitButton = styled.input.attrs({
  type: "submit",
  value: "Submit",
})`
  padding: 0.9rem 1rem 0.9rem 1rem;
  margin-left: 1.5rem;
  border-radius: 0.3rem;

  color: white;
  background-color: #393e46;
  margin-top: 3rem;

  &:hover {
    color: #00adb5;
  }

  ${media.largeDesktop} {
    font-size: 1.2rem;
  }

  ${media.desktop} {
    width: 42%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 2rem;
  }

  ${media.tablet} {
    display: block;
    font-size: 2rem;

    margin-left: auto;
    margin-right: auto;
    width: 42%;
  }

  ${media.largePhone} {
    font-size: 2rem;
    margin-top: 3rem;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledTodoDiv = styled.div``;

export const StyledLabel = styled.label`
  color: #eeeeee;
  text-transform: uppercase;
  margin-left: 0.4rem;
  margin-right: 0.4rem;

  ${media.desktop} {
    display: block;
    font-size: 2rem;
    margin: 1.2rem;
  }

  ${media.tablet} {
    display: block;
    font-size: 2rem;
    margin: 1.2rem;
  }
`;

export const StyledInput = styled.input`
  width: 10%;
  padding: 1rem 3rem;
  box-sizing: border-box;
  background-color: #393E46;
  color: white;
  border-radius: 0.3rem;
  
  
  &:focus {
    box-shadow 0 0 10px #00ADB5;
    color: #EEEEEE ;
    
  }

  ${media.desktop} {
    width: 40%;
  }


  ${media.tablet} {
    width: 40%;
  }

  ${media.largePhone} {
    width: 45%;
  }

  
`;

export const StyledSizedH1 = styled.h1`
  color: #eeeeee;

  ${media.largeDesktop} {
    font-size: 3em;

  }

  ${media.desktop} {
    font-size: 2.7em;

  }

  ${media.tablet} {
    font-size: 2.5rem;

    
  }

  ${media.largePhone} {
    font-size: 2rem;
  }
`;

export const StyledP = styled.p`
  color: #eeeeee;
  font-size: 1.5rem;
`;

export const StyledBlueP = styled.p`
  color: #00ADB5;
  font-size: 1.5rem;

`;

export const StyledAboutSpan = styled.span`
  color: #00ADB5;
  font-size: 1.5rem;
  display: inline;
`;

export const StyledSignUpDiv = styled.div`

`;

export const StyledCenterContentDiv = styled.div`
  
  margin-left: auto;
  margin-right: auto;
  text-align: center;

`;

export const StyledSignUpLabel = styled.label`
  color: #eeeeee;
  margin: 0.2rem;
  padding: 0.5rem;
  display: block;
  font-size: 1.5rem;
`;

export const StyledSignUpInput = styled.input`
  border: 0.1rem solid grey;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 1.6rem;
  width: 15rem;
  border-radius: 0.3rem;
  
  &:focus {
    box-shadow 0 0 10px #00ADB5;
  }
`;

export const StyledSignUpSubmitButton = styled.button`
  color: #eeeeee;
  background: #393e46;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    color: #00adb5;
  }
`;

export const StyledChangePasswordLabel = styled.label`
  color: #eeeeee;
  margin: 0.2rem;
  padding: 0.5rem;
  font-size: 1.5rem;
`;

export const StyledChangePasswordInput = styled.input`
  border: 0.1rem solid grey;
  margin-left: auto;
  margin-right: auto;
  height: 1.6rem;
  width: 15rem;
  
  
  
  &:focus {
    box-shadow 0 0 10px #00ADB5;
  }
`;

export const StyledChangePasswwordSubmitButton = styled.button`
  color: #eeeeee;
  background: #393e46;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    color: #00adb5;
  }
`;