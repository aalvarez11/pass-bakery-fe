import styled from "styled-components";

const StyledTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-left: 32px;
  margin-bottom: 4px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 32px;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  width: 48%;
  margin: 8px;
  button.itemButton {
    width: 100%;
    background-color: white;
    border: 2px solid lightgray;
    border-radius: 4px;
    &:hover {
      background-color: lightgray;
    }
    span.itemButton__name {
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

  return (
    <>
      <StyledTitle>{name}</StyledTitle>
      <StyledList>
        {offerings.map((item, idx) => (
          <StyledListItem key={idx}>
            <button
              className="itemButton"
              onClick={() => this.props.addToCart(item)}
            >
              <span className="itemButton__name">{item.name}</span>
              <br />
              <span className="itemButton__price">${item.price}</span>
            </button>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

export default BuildCategoryList;
