import PropTypes from "prop-types";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

const FlashCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center flex-col items-center   ">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="flex-col shadow-2xl bg-white m-10  w-96 h-96 p-5 flex justify-start items-center text-center text-blue-800 text-xl rounded-[30px]">
          <h2 className="m-10 text-4xl text-lime-500">Question?</h2>
          {question}
        </div>
        <div className="flex-col shadow-2xl bg-white m-10  w-96 h-96 p-5 flex justify-start items-center text-center text-blue-800 text-xl rounded-[30px]">
          <h2 className="m-10 text-4xl text-lime-500 underline-offset-1">
            Answer
          </h2>
          {answer}
        </div>
      </ReactCardFlip>
      <button
        onClick={handleClick}
        className="rounded-md bg-green-500  py-2 px-3 text-xl text-white    tracking-wider hover:bg-teal-700"
      >
        Show Answer
      </button>
    </div>
  );
};

FlashCard.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default FlashCard;
