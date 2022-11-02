import styled from "styled-components";

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
  return (
    <>
      <StyledItemContainer>
        <p className="cart-item__name">{item.name}</p>
        <p>${item.price}</p>
      </StyledItemContainer>
      <StyledRemoveButton>remove</StyledRemoveButton>
    </>
  );
}

export default CartItem;
