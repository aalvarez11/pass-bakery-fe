import { useState } from "react";
import Cart from "./Cart";
import BakeryMain from "./BakeryMain";
import styled from "styled-components";

const StyledTopDiv = styled.div`
  display: flex;

  .bakery__main {
    flex-grow: 6;
  }
  .bakery__cart {
    flex-grow: 3;
  }
`;

function Bakery() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <StyledTopDiv>
      <BakeryMain className="bakery__main"></BakeryMain>
      <Cart className="bakery__cart" cartItems={cartItems}></Cart>
    </StyledTopDiv>
  );
}

export default Bakery;
