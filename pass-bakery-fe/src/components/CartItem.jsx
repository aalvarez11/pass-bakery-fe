import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import styled from "styled-components";
import { formatCurrencyToUSD } from "../helpers/formatCurrencyToUSD";

const StyledItemContainer = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 8px;
`;

const StyledRemoveButton = styled.p`
  font-size: 0.8em;
  color: darkolivegreen;
  margin-left: 24px;
  span {
    background-color: #c5caba;
  }
`;

function CartItem(item) {
  const itemPrice = formatCurrencyToUSD(item.price);
  const dispatch = useDispatch();
  const itemId = item.itemId;

  return (
    <>
      <StyledItemContainer className="cart__item">
        <span>{item.name}</span>
        <span>{itemPrice}</span>
      </StyledItemContainer>
      <StyledRemoveButton
        onClick={() => {
          dispatch(removeItem(itemId));
        }}
      >
        <span>remove</span>
      </StyledRemoveButton>
    </>
  );
}

export default CartItem;
