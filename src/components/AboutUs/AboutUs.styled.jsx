import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
`;
export const Line = styled.div`
  width: 50%;
  height: 8px;
  border-radius: 10px;
  margin: 40px auto 40px;
  background-image: linear-gradient(
    90deg,
    rgba(37, 115, 153, 1) 1%,
    rgba(174, 215, 222, 1) 93%
  );
`;

export const LeftBlock = styled.div`
  width: 70%;

  img {
    border-radius: 30%;
  }
`;

export const RightBlock = styled.div`
  width: 45%;
  margin-left: 30px;
`;
export const Title = styled.h3`
  font-size: 38px;
  margin-bottom: 20px;
  background-image: linear-gradient(
    90deg,
    rgba(37, 115, 153, 1) 1%,
    rgba(174, 215, 222, 1) 93%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
  &::first-letter {
    font-size: 26px;
    color: rgba(37, 115, 153, 1);
  }
`;
