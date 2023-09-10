import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval); // Остановить интервал после завершения печати
      }
    }, 50); // Интервал между символами
    return () => clearInterval(typingInterval); // Очистить интервал при размонтировании компонента
  }, [currentIndex, text]);

  return <div>{displayText}</div>;
};

export default Typewriter;

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
};
