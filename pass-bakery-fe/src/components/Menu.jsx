import styled from "styled-components";
import Coffee from "./CoffeeList";
import Breakfast from "./BreakfastList";
import Breads from "./BreadList";

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 4px 128px;
`;

function Menu(props) {
  return (
    <StyledMenuContainer>
      <Coffee secData={props.data.Coffee}></Coffee>
      <Breakfast secData={props.data.Breakfast}></Breakfast>
      <Breads secData={props.data.Bread}></Breads>
    </StyledMenuContainer>
  );
}

export default Menu;
