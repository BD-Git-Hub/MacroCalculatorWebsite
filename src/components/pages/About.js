import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'

`;

const About = () => {
  return (
    <StyledDiv>
      <h1>Information about the creator</h1>
    </StyledDiv>
  );
};

export default About;
