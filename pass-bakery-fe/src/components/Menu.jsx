import styled from "styled-components";
import Coffee from "./CoffeeList";
import Breakfast from "./BreakfastList";
import Breads from "./BreadList";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 16px auto;
  width: 72%;
`;

function Menu(props) {
  return (
    <MenuContainer>
      <Coffee secData={props.data.Coffee}></Coffee>
      <Breakfast secData={props.data.Breakfast}></Breakfast>
      <Breads secData={props.data.Bread}></Breads>
    </MenuContainer>
  );
}

export default Menu;
