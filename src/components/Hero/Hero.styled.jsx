import styled from "styled-components";

export const Banner = styled.img``;

export const Greeting = styled.div`
  position: absolute;
  max-width: 410px;
  height: 340px;
  left: 59%;
  top: 25%;

  h3 {
    letter-spacing: 3px;
    background-image: linear-gradient(90deg, #44738d 1%, #aecbd1 93%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  background: rgba(194, 199, 208, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(194, 199, 208, 0.3);
  padding: 20px;
  font-size: 30px;
  font-weight: 500;
`;
