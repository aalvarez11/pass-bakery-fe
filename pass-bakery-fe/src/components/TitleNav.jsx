import React from "react";
import styled from "styled-components";
import logo from "../images/1p-site-logo.svg";
import bread from "../images/bread.jpeg";

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 16px;
`;

const Title = styled.h1`
  margin: auto;
  font-family: "Qwitcher Grypen";
  font-size: 128px;
`;

const Hours = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 4px;
`;

const BreadImage = styled.img`
  max-width: 512px;
  height: auto;
`;

const Info = styled.p`
  margin-bottom: 32px;
`;

function TitleNav() {
  return (
    <TitleContainer>
      <div id="title-hours">
        <img src={logo} alt="one pass logo" />
        <Title>Pass Bakery</Title>
        <Info>620 N 25th St, San Francisco, CA</Info>
        <Hours>Bakery Hours:</Hours>
        <Info>
          Mon-Fri 6AM-5PM PT,
          <br />
          Sat-Sun 7AM-4PM PT
        </Info>
      </div>
      <BreadImage src={bread} alt="fresh baked bread" />
    </TitleContainer>
  );
}

export default TitleNav;
