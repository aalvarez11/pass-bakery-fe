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
    const currDay = this.state.currDay;
    const currHour = this.state.currHour;
    const bakeryHours = this.props.data.hours;
    const bakeryCurrDay = bakeryHours[currDay];
    const dayDictionary = {
      0: "Sun.",
      1: "Mon.",
      2: "Tues.",
      3: "Weds.",
      4: "Thurs.",
      5: "Fri.",
      6: "Sat.",
    };

    if (
      currHour < bakeryCurrDay[dayDictionary[currDay]].open &&
      currHour > bakeryCurrDay[dayDictionary[currDay]].close - 1
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
