import styled from "styled-components";
import { formatCurrency } from "../helpers/formatCurrency";

const StyledItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  p.cart-item__name {
    font-weight: bold;
  }
`;

const StyledRemoveButton = styled.p`
  font-size: 0.8em;
`;

function CartItem(item) {
  const itemPrice = formatCurrency(item.price);

  return (
    <>
      <StyledItemContainer>
        <p className="cart-item__name">{item.name}</p>
        <p>{itemPrice}</p>
      </StyledItemContainer>
      <StyledRemoveButton>remove</StyledRemoveButton>
    </>
  );
}

export default CartItem;
