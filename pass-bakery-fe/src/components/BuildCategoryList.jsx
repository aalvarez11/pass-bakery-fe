import { useDispatch } from "react-redux";
import styled from "styled-components";
import { formatCurrency } from "../helpers/formatCurrency";
import { addToCart } from "../redux/cartSlice";

const StyledTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 4px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-left: 0px;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  width: 512px;
  margin-top: 8px;
  margin-bottom: 8px;
  button.itemButton {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8px;
    background-color: white;
    border: 2px solid lightgray;
    border-radius: 4px;
    &:hover {
      background-color: lightgray;
    }
    span.itemButton__name {
      margin-bottom: 8px;
      font-size: large;
      font-weight: bold;
    }
    span.itemButton__price {
      font-style: italic;
      color: gray;
    }
  }
`;

function BuildCategoryList(section) {
  const name = section.name;
  const offerings = section.offerings;
  const dispatch = useDispatch();

  return (
    <>
      <StyledTitle>{name}</StyledTitle>
      <StyledList>
        {offerings.map((item, idx) => (
          <StyledListItem key={idx}>
            <button
              className="itemButton"
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              <span className="itemButton__name">{item.name}</span>
              <span className="itemButton__price">
                {formatCurrency(item.price)}
              </span>
            </button>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

export default BuildCategoryList;
