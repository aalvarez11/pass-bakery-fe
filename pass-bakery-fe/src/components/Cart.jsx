import styled from "styled-components";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { formatCurrency } from "../helpers/formatCurrency";

const StyledCartPanel = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100%;
  min-width: 24%;
  height: auto;
  top: 0;
  right: 0;
  border-left: 2px solid lightgray;
  h2.cart__title {
    font-weight: bold;
    font-size: 24px;
    margin-left: 24px;
    margin-top: 32px;
    margin-bottom: 4px;
  }
  div.cart__items {
    min-height: 200px;
  }
  p.cart__total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 8px;
  }
  button.cart__checkout {
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
  }
`;

function Cart(props) {
  const { cartItems, itemQuantity, total } = useSelector((state) => state.cart);
  const cartTotal = formatCurrency(total);

  return (
    <StyledCartPanel className={props.className}>
      <h2 className="cart__title">Your Order</h2>
      <div className="cart__items">
        {cartItems.map((item, idx) => {
          return <CartItem key={idx} itemId={idx} {...item}></CartItem>;
        })}
      </div>
      <p className="cart__total">
        <span>Your total is:</span>
        <span>{cartTotal}</span>
      </p>
      <button className="cart__checkout">Checkout ({itemQuantity})</button>
    </StyledCartPanel>
  );
}

export default Cart;
