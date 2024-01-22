import CodeMasterForm from "./CodeMasterForm";
import FlashCardCarousel from "./FlashCardCarousel";

import { data } from "../json/flashcard.json";
const CodeMaster = () => {
  const handleSubmit = (topic, numQuestions) => {
    console.log(`Form Submitted with ${numQuestions} question on ${topic}`);

    // API Call
  };

  return (
    <div className="flex justify-between bg-gray-50 items-center  p-10 mx-64 m-16 rounded-3xl">
      <CodeMasterForm handleFormSubmit={handleSubmit} />
      <FlashCardCarousel flashCardData={data} />
    </div>
  );
};

export default CodeMaster;
