import FlashCard from "./common/FlashCard";
import CodeMasterForm from "./CodeMasterForm";

const CodeMaster = () => {
  const handleSubmit = (topic, numQuestions) => {
    console.log(`Form Submitted with ${numQuestions} question on ${topic}`);

    // API Call
  };
  return (
    <div className="flex justify-around items-center  m-10 p-10">
      <CodeMasterForm handleFormSubmit={handleSubmit} />
      <FlashCard
        className="w-2/3"
        question="What is JavaScript?"
        answer="JavaScript is a high-level, interpreted programming language."
      />
    </div>
  );
};

export default CodeMaster;
