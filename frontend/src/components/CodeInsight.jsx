import Card from "./Card";
import Editor from "./common/Editor";
import { useState } from "react";

const CodeInsight = () => {
  const [editorCode, setEditorCode] = useState(null);
  const [editorCodeLangugae, setEditorCodeLanguage] = useState("javascript");
  const [editorCodeTheme, setEditorCodeTheme] = useState("kuroir");

  const handleGetInsight =()=>{}
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
      <Card data="I am susheel thapa" />
    </div>
  );
};

export default CodeInsight;
