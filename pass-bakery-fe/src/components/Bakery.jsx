import Cart from "./Cart";
import BakeryMain from "./BakeryMain";
import styled from "styled-components";

const StyledTopDiv = styled.div`
  display: flex;

  .bakery-main {
    flex-grow: 6;
  }
  .cart {
    flex-grow: 3;
  }
`;

function Bakery() {
  return (
    <StyledTopDiv>
      <BakeryMain className="bakery-main"></BakeryMain>
      <Cart className="cart"></Cart>
    </StyledTopDiv>
  );
}

export default Bakery;
