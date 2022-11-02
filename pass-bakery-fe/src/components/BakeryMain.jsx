import { menuData } from "../data/menuData";
import TitleNav from "./TitleNav";
import Menu from "./Menu";
import styled from "styled-components";

const StyledContainer = styled.div``;

// const StyledHorizontalRule = styled.hr`
//   border-color: lightgray;
// `;

function BakeryMain(props) {
  const menuObj = {};
  menuData.menu.forEach((item, idx) => {
    menuObj[menuData.menu[idx].name] = item;
  });

  return (
    <StyledContainer className={props.className}>
      <TitleNav></TitleNav>
      <Menu data={menuObj}></Menu>
    </StyledContainer>
  );
}

export default BakeryMain;
