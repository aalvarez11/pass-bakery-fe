import Cart from "./Cart";
import BakeryMain from "./BakeryMain";
import styled from "styled-components";

const StyledTopDiv = styled.div`
  display: flex;
  .bakery__main {
    flex-grow: 4;
  }
  .bakery__cart {
    flex-grow: 2;
  }
`;

function Bakery() {
  return (
    <StyledTopDiv>
      <BakeryMain className="bakery__main"></BakeryMain>
      <Cart className="bakery__cart"></Cart>
    </StyledTopDiv>
  );
}

export default Bakery;
