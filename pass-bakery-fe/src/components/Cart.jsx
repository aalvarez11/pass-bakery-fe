import styled from "styled-components";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { formatCurrency } from "../helpers/formatCurrency";

const StyledCartPanel = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  min-height: 100%;
  height: auto;
  top: 0;
  right: 0;
  border-left: 2px solid lightgray;
`;

const StyledHeader = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-left: 32px;
  margin-bottom: 4px;
`;

const StyledItemContainer = styled.div`
  min-height: 200px;
`;

const StyledParagraph = styled.p`
  font-weight: bold;
  margin-left: 32px;
  margin-bottom: 8px;
`;

const StyledCheckoutButton = styled.button`
  background-color: darkolivegreen;
  display: block;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: white;
  border: none;
  &:hover {
    background-color: olivedrab;
  }
`;

function Cart(props) {
  const { cartItems, itemQuantity, total } = useSelector((state) => state.cart);
  const cartTotal = formatCurrency(total);

  return (
    <StyledCartPanel className={props.className}>
      <StyledHeader>Your Order</StyledHeader>
      <StyledItemContainer>
        {cartItems.map((item) => {
          return <CartItem key={item.name} {...item}></CartItem>;
        })}
      </StyledItemContainer>
      <StyledParagraph>Your total is: {cartTotal}</StyledParagraph>
      <StyledCheckoutButton>Checkout ({itemQuantity})</StyledCheckoutButton>
    </StyledCartPanel>
  );
}

export default Cart;
