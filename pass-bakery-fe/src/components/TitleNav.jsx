import React from "react";
import styled from "styled-components";
import logo from "../images/1p-site-logo.svg";
import bread from "../images/bread.jpeg";

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid lightgray;
`;

const StyledLogo = styled.img`
  max-height: 16px;
  width: auto;
`;

const StyledTitle = styled.h1`
  margin: auto;
  font-family: "Qwitcher Grypen";
  font-weight: normal;
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

class TitleNav extends React.Component {
  constructor() {
    super();
    var today = new Date();
    var hour = today.getHours();
    var day = today.getDay();

    this.state = {
      currHour: hour,
      currDay: day,
    };
  }

  render() {
    let closedMessage = "";

    if (
      ((this.state.currDay == 0 || this.state.currDay == 6) &&
        (this.state.currHour < 7 || this.state.currHour > 15)) ||
      (this.state.currDay > 0 &&
        this.state.currDay < 6 &&
        (this.state.currHour < 6 || this.state.currHour > 16))
    ) {
      closedMessage = "BAKERY IS CLOSED.";
    }

    return (
      <StyledTitleContainer>
        <div id="title-hours">
          <StyledLogo src={logo} alt="the One Pass logo" />
          <StyledTitle>Pass Bakery</StyledTitle>
          <StyledHours>Hours</StyledHours>
          <StyledInfo>
            Mon-Fri 6AM-5PM PT,
            <br />
            Sat-Sun 7AM-4PM PT
          </StyledInfo>
          <StyledInfo className="bakery-closed">{closedMessage}</StyledInfo>
        </div>
        <StyledBreadImage src={bread} alt="fresh baked bread" />
      </StyledTitleContainer>
    );
  }
}

export default TitleNav;
