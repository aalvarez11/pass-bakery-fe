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
`;

const StyledItemButton = styled.button`
  width: 100%;
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 4px;
  &:hover {
    background-color: lightgray;
  }
`;

const StyledButtonTitle = styled.span`
  font-weight: bold;
`;

const StyledButtonPrice = styled.span`
  font-style: italic;
  color: gray;
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
            <StyledItemButton onClick={() => this.props.addToCart(item)}>
              <StyledButtonTitle>{item.name}</StyledButtonTitle>
              <br />
              <StyledButtonPrice>${item.price}</StyledButtonPrice>
            </StyledItemButton>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

export default BuildCategoryList;
