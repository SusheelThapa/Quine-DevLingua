import CodeMasterForm from "./CodeMasterForm";
import FlashCardCarousel from "./FlashCardCarousel";

import { flashCardData } from "../json/flashcard.json";
import { askOpenAI } from "../services/askOpenAI";
import { useState } from "react";
const CodeMaster = () => {
  const [data, setData] = useState(flashCardData);

  const handleSubmit = async (topic, numQuestions) => {
    console.log("API is happeneing");
    const prompt = `Create ${numQuestions} simple flashcards for a ${topic} quiz, in the following format: [{question: '', answer: ''}]. Do not return any non-json text or numbering.`;

    try {
      const response = await askOpenAI("CodeMaster", prompt);
      const res = JSON.parse(response);
      setData(res);
    } catch (e) {
      console.log(e);
      setData([{ question: "ERROR", answer: "ERROR" }]);
    }
    console.log("API is completeed");
  };

  return (
    <div className="flex justify-between bg-gray-50 items-center  p-10 mx-64 m-16 rounded-3xl">
      <CodeMasterForm handleSubmit={handleSubmit} />
      <FlashCardCarousel flashCardData={data} />
    </div>
  );
};

export default CodeMaster;
