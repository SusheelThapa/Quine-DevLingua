import PropTypes from "prop-types";
import { useState } from "react";

const CodeMasterForm = ({ handleSubmit }) => {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(topic, numQuestions);
      }}
    >
      <div className="mb-10">
        <label
          htmlFor="topic"
          className="block text-xl font-medium text-gray-600"
        >
          Topic
        </label>
        <input
          type="text"
          id="topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter the topic for questions"
        />
      </div>
      <div className="mb-10">
        <label
          htmlFor="numQuestions"
          className="block text-xl font-medium text-gray-600"
        >
          Number of Questions
        </label>
        <input
          type="number"
          id="numQuestions"
          name="numQuestions"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter the number of questions"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white text-xl py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Generate
      </button>
    </form>
  );
};

CodeMasterForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default CodeMasterForm;
