import React from "react";
import styled from "styled-components";
import logo from "../images/1p-site-logo.svg";
import bread from "../images/bread.jpeg";

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 16px;
  border-bottom: 1px solid lightgray;
`;

const StyledTitle = styled.h1`
  margin: auto;
  font-family: "Qwitcher Grypen";
  font-size: 128px;
`;

const StyledHours = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 4px;
`;

const StyledBreadImage = styled.img`
  max-width: 512px;
  height: auto;
`;

const StyledInfo = styled.p`
  margin-bottom: 32px;
`;

function TitleNav() {
  return (
    <StyledTitleContainer>
      <div id="title-hours">
        <img src={logo} alt="one pass logo" />
        <StyledTitle>Pass Bakery</StyledTitle>
        <StyledInfo>620 N 25th St, San Francisco, CA</StyledInfo>
        <StyledHours>Bakery Hours:</StyledHours>
        <StyledInfo>
          Mon-Fri 6AM-5PM PT,
          <br />
          Sat-Sun 7AM-4PM PT
        </StyledInfo>
      </div>
      <StyledBreadImage src={bread} alt="fresh baked bread" />
    </StyledTitleContainer>
  );
}

export default TitleNav;
