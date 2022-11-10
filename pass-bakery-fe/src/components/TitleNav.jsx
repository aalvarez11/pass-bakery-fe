import React from "react";
import styled from "styled-components";
import logo from "../images/1p-site-logo.svg";
import bread from "../images/bread.jpeg";

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid lightgray;
  div.bakery__left {
    margin-left: 128px;
  }
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
    margin-right: 128px;
    margin-bottom: 32px;
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
    const bakeryHours = this.props.data.hours;
    const bakeryCurrDay = bakeryHours[this.state.currDay];

    if (
      (this.state.currDay === 0 &&
        this.state.currHour < bakeryCurrDay["Sun."].open &&
        this.state.currHour > bakeryCurrDay["Sun."].close - 1) ||
      (this.state.currDay === 1 &&
        this.state.currHour < bakeryCurrDay["Mon."].open &&
        this.state.currHour > bakeryCurrDay["Mon."].close - 1) ||
      (this.state.currDay === 2 &&
        this.state.currHour < bakeryCurrDay["Tues."].open &&
        this.state.currHour > bakeryCurrDay["Tues."].close - 1) ||
      (this.state.currDay === 3 &&
        this.state.currHour < bakeryCurrDay["Weds."].open &&
        this.state.currHour > bakeryCurrDay["Weds."].close - 1) ||
      (this.state.currDay === 4 &&
        this.state.currHour < bakeryCurrDay["Thurs."].open &&
        this.state.currHour > bakeryCurrDay["Thurs."].close - 1) ||
      (this.state.currDay === 5 &&
        this.state.currHour < bakeryCurrDay["Fri."].open &&
        this.state.currHour > bakeryCurrDay["Fri."].close - 1) ||
      (this.state.currDay === 6 &&
        this.state.currHour < bakeryCurrDay["Sat."].open &&
        this.state.currHour > bakeryCurrDay["Sat."].close - 1)
    ) {
      closedMessage = "BAKERY IS CLOSED.";
    }

    return (
      <StyledTitleContainer>
        <div className="bakery__left">
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
