import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-left: 32px;
  margin-bottom: 4px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 32px;
  list-style-type: none;
`;

const ListItem = styled.li`
  width: 48%;
  margin: 8px;
`;

const ItemButton = styled.button`
  width: 100%;
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 4px;
  &:hover {
    background-color: lightgray;
  }
`;

const ButtonTitle = styled.span`
  font-weight: bold;
`;

const ButtonPrice = styled.span`
  font-style: italic;
  color: gray;
`;

function BuildCategoryList(section) {
  const name = section.name;
  const offerings = section.offerings;

  return (
    <>
      <Title>{name}</Title>
      <List>
        {offerings.map((item, idx) => (
          <ListItem key={idx}>
            <ItemButton>
              <ButtonTitle>{item.name}</ButtonTitle>
              <br />
              <ButtonPrice>${item.price}</ButtonPrice>
            </ItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default BuildCategoryList;
