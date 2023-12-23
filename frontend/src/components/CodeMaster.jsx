import CodeMasterForm from "./CodeMasterForm";
import FlashCardCarousel from "./FlashCardCarousel";

import flashCardsDetail from "../json/flashcard.json";
const CodeMaster = () => {
  const handleSubmit = (topic, numQuestions) => {
    console.log(`Form Submitted with ${numQuestions} question on ${topic}`);

    // API Call
  };
  return (
    <div className="flex justify-around items-center  m-10 p-10">
      <CodeMasterForm handleFormSubmit={handleSubmit} />
      <FlashCardCarousel flashCardsDetail={flashCardsDetail} />
    </div>
  );
};

export default CodeMaster;
