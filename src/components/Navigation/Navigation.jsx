import { Container, Item, NavList } from "./Navigation.styled";

const Navigation = () => {
  return (
    <>
      <Container>
        <NavList>
          <Item>Головна</Item>
          <Item>Про нас</Item>
          <Item>Послуги</Item>
          <Item>Портфоліо</Item>
          <Item>Контакти</Item>
        </NavList>
      </Container>
    </>
  );
};

export default Navigation;
