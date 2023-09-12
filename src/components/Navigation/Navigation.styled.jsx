import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 35px;
`;

export const Item = styled.li`
  cursor: pointer;
  color: #e3eef5;
  font-size: 15px;
  transform: all 0.4s;
  padding: 7px 15px;
  border-radius: 10px;
  transition: 0.4s;
  border: 1px solid #aed7de;
  &:hover {
    color: #202b2b;

    background: linear-gradient(
      90deg,
      rgba(37, 115, 153, 1) 1%,
      rgba(174, 215, 222, 1) 93%
    );
  }
`;
