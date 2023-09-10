import { useEffect, useState } from "react";
import banner from "../../assets/images/banner.jpg";
import { Banner, Greeting } from "./Hero.styled";
import Typewriter from "./Typewriter";

const Hero = () => {
  const initialText =
    "Привіт, раді вітати вас на нашому сайті! Давайте знайомитись ближче...";
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 2000);

    return () => clearTimeout(typingTimeout);
  }, []);
  return (
    <>
      <Greeting>
        {startTyping && (
          <h3>
            <Typewriter text={initialText} />
          </h3>
        )}
      </Greeting>
      <Banner src={banner} alt="" />
    </>
  );
};

export default Hero;
