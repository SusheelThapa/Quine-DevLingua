import Card from "./Card";
import Editor from "./common/Editor";
import { useState } from "react";

const CodeInsight = () => {
  
  const code = `const sum = (a, b) => {
    return a + b;
  };
  
  sum(4,5);
  `;

  const [editorCode, setEditorCode] = useState(code);
  const [editorCodeLangugae, setEditorCodeLanguage] = useState("javascript");
  const [editorCodeTheme, setEditorCodeTheme] = useState("kuroir");

  const cardData =
    "The JavaScript code defines a function `sum` that adds two input values, `a` and `b`. It aims to provide a simple and reusable way to perform addition. The code employs an arrow function and is straightforward without complex algorithms or techniques.";

  const handleGetInsight = () => {};
  return (
    <div className="bg-gray-50  rounded-2xl mx-64 my-10 flex justify-evenly items-center">
      <div className="flex justify-around items-center flex-col">
        <Editor
          autofocus={true}
          code={editorCode}
          onCodeChange={setEditorCode}
          language={editorCodeLangugae}
          theme={editorCodeTheme}
          onLanguageChange={setEditorCodeLanguage}
          onThemeChange={setEditorCodeTheme}
        />
        <button
          onClick={handleGetInsight}
          className="bg-purple-500 text-white  py-2 px-4 mb-5 w-96 rounded-lg text-xl hover:bg-purple-600"
        >
          Get Insight
        </button>
      </div>
      <Card data={cardData} />
    </div>
  );
};

export default CodeInsight;
