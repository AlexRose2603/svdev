import { GrLinkedin } from "react-icons/gr";
import {
  Backview,
  ContactsBlock,
  Container,
  Linkedin,
  Text,
} from "./Footer.styled";
import backimg from "../../assets/images/footer5.png";
const Footer = () => {
  return (
    <>
      <Container>
        <Text>Наші контакти:</Text>
        <ContactsBlock>
          <a href="tel:+380979109204">+38-097-910-92-04</a>
          <a href="mailto:email@gmail.com">email@gmail.com</a>
          <Linkedin href="https://www.linkedin.com/company/svdevsoft/about/">
            <GrLinkedin />
          </Linkedin>
        </ContactsBlock>
      </Container>
      <Backview src={backimg} alt="" />
    </>
  );
};
export default Footer;
