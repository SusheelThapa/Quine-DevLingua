import CodeMasterForm from "./CodeMasterForm";
import FlashCardCarousel from "./FlashCardCarousel";

import { data } from "../json/flashcard.json";
import { askOpenAI } from "../services/askOpenAI";
import { useState } from "react";
const CodeMaster = () => {
  const [data, setData] = useState({ question: "", answer: "" });

  const handleSubmit = async (topic, numQuestions) => {
    const prompt = `Generate a flashcard in ${topic} over ${numQuestions} of question`;

    try {
      const response = await askOpenAI("CodeMaster", prompt);
      setData(data);
    } catch (e) {
      setData({ question: "", answer: "" });
    }
  };

  return (
    <div className="flex justify-between bg-gray-50 items-center  p-10 mx-64 m-16 rounded-3xl">
      <CodeMasterForm handleFormSubmit={handleSubmit} />
      <FlashCardCarousel flashCardData={data} />
    </div>
  );
};

export default CodeMaster;
