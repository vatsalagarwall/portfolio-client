// import React, { useState, useEffect } from "react";
// import "./TypeWriter.css";

// const TypeWriter = ({ texts, speed, delayBetweenTexts }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     if (texts && texts[textIndex] && index < texts[textIndex].length) {
//       const timeoutId = setTimeout(() => {
//         setDisplayedText(displayedText + texts[textIndex].charAt(index));
//         setIndex(index + 1);
//       }, speed);

//       return () => clearTimeout(timeoutId);
//     } else if (texts && texts[textIndex]) {
//       // Reset after a delay and switch to the next text
//       const resetTimeoutId = setTimeout(() => {
//         setDisplayedText("");
//         setIndex(0);
//         setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//       }, delayBetweenTexts);

//       return () => clearTimeout(resetTimeoutId);
//     }
//   }, [index, texts, textIndex, speed, delayBetweenTexts, displayedText]);

//   return (
//     <div className="typewriter">
//       <p>{displayedText}</p>
//     </div>
//   );
// };

// export default TypeWriter;

import React, { useState, useEffect } from "react";
import "./TypeWriter.css";

const TypeWriter = ({ texts, speed, delayBetweenTexts, backspaceSpeed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts && texts[textIndex]) {
      if (!isDeleting && index < texts[textIndex].length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(displayedText + texts[textIndex].charAt(index));
          setIndex(index + 1);
        }, speed);

        return () => clearTimeout(timeoutId);
      } else if (isDeleting && index > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
          setIndex(index - 1);
        }, backspaceSpeed);

        return () => clearTimeout(timeoutId);
      } else if (!isDeleting && index === texts[textIndex].length) {
        const timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);

        return () => clearTimeout(timeoutId);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [
    index,
    texts,
    textIndex,
    isDeleting,
    speed,
    delayBetweenTexts,
    backspaceSpeed,
    displayedText,
  ]);

  return (
    <div className="typewriter">
      <p>{displayedText}</p>
    </div>
  );
};

export default TypeWriter;
