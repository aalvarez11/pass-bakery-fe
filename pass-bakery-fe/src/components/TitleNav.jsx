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
  img.logo {
    max-height: 16px;
    width: auto;
  }
  h1.title {
    margin: auto;
    font-family: "Qwitcher Grypen";
    font-weight: normal;
    font-size: 128px;
  }
  h2.title--hours {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 4px;
  }
  img.bread {
    max-width: 512px;
    height: auto;
  }
  p.info {
    margin-bottom: 32px;
  }
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
      ((this.state.currDay === 0 || this.state.currDay === 6) &&
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
          <img className="logo" src={logo} alt="the One Pass logo" />
          <h1 className="title">Pass Bakery</h1>
          <h2 className="title--hours">Hours</h2>
          <p className="info">
            Mon-Fri 6AM-5PM PT,
            <br />
            Sat-Sun 7AM-4PM PT
          </p>
          <p className="info bakery-closed">{closedMessage}</p>
        </div>
        <img className="bread" src={bread} alt="fresh baked bread" />
      </StyledTitleContainer>
    );
  }
}

export default TitleNav;
