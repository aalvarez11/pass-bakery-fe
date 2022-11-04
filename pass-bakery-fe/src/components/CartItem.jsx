import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import styled from "styled-components";
import { formatCurrency } from "../helpers/formatCurrency";

const StyledItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  p.cart__item {
    font-weight: bold;
  }
`;

const StyledRemoveButton = styled.p`
  font-size: 0.8em;
  color: darkolivegreen;
  background-color: #c5caba;
`;

function CartItem(item) {
  const itemPrice = formatCurrency(item.price);
  const dispatch = useDispatch();

  return (
    <>
      <StyledItemContainer>
        <p className="cart__item">
          <span>{item.name}</span>
          <span>{itemPrice}</span>
        </p>
      </StyledItemContainer>
      <StyledRemoveButton onClick={dispatch(removeItem(item.name))}>
        remove
      </StyledRemoveButton>
    </>
  );
}

export default CartItem;
