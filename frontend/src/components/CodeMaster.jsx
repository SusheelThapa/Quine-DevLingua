import CodeMasterForm from "./CodeMasterForm";
import FlashCardCarousel from "./FlashCardCarousel";

import { data } from "../json/flashcard.json";
const CodeMaster = () => {
  const handleSubmit = (topic, numQuestions) => {
    console.log(`Form Submitted with ${numQuestions} question on ${topic}`);

    // API Call
  };

  console.log(data);
  return (
    <div className="flex justify-around items-center  m-10 p-10">
      <CodeMasterForm handleFormSubmit={handleSubmit} />
      <FlashCardCarousel flashCardData={data} />
    </div>
  );
};

export default CodeMaster;
