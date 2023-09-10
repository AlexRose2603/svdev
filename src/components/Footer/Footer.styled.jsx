import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  left: 25%;
  margin-top: 30px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-right: 60px;
  background-image: linear-gradient(
    90deg,
    #637d8a 17%,
    rgba(130, 132, 142, 1) 93%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const ContactsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  a:first-child {
    color: #ffffff;
  }
  a:nth-child(2) {
    color: #ffffff;
  }
`;
export const Linkedin = styled.a`
  color: #090930;
  font-size: 24px;
  text-align: center;
`;

export const Backview = styled.img`
  height: 280px;
`;
