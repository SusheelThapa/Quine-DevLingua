import { useState } from "react";
import FlashCard from "./common/FlashCard";

import PropTypes from "prop-types";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const FlashCardCarousel = ({ flashCardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="carousel-container flex justify-center items-center">
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="left-arrow text-2xl text-red-500"
        >
          <FaArrowLeft />
        </button>
      )}
      <FlashCard
        question={flashCardData[currentIndex].question}
        answer={flashCardData[currentIndex].answer}
      />

      {currentIndex < flashCardData.length - 1 && (
        <button
          onClick={goToNext}
          className="right-arrow text-2xl text-red-500"
        >
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};

FlashCardCarousel.propTypes = {
  flashCardData: PropTypes.array,
};
export default FlashCardCarousel;
