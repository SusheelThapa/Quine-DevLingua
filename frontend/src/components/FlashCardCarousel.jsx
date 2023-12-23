import FlashCard from "./common/FlashCard";

const FlashCardCarousel = ({ flashCardsDetail }) => {
  return (
    <>
      {flashCardsDetail.map(({ question, answer }) => {
        <FlashCard className="w-2/3" question={question} answer={answer} />;
      })}
    </>
  );
};

export default FlashCardCarousel;
