import Card from "./Card";
import Editor from "./common/Editor";
import { useState } from "react";
import { askOpenAI } from "../services/askOpenAI";

const CodeInsight = () => {
  const [editorCode, setEditorCode] = useState("");
  const [editorCodeLangugae, setEditorCodeLanguage] = useState("javascript");
  const [editorCodeTheme, setEditorCodeTheme] = useState("kuroir");

  const [cardData, setCardData] = useState("");

  const handleGetInsight = async () => {
    const prompt = `
    Given a ${editorCode} in a ${editorCodeLangugae} programming language of your choice, summarize the overall meaning and functionality of the code. 
        Highlight the main objectives and outcomes without delving into the specific implementation details. 
        Ensure the summary is concise and captures the essence of the code's purpose. 
        Additionally, mention any key algorithms or techniques employed in the code.  `;

    try {

      const response = await askOpenAI("CodeInsight", prompt);
      setCardData(response);
    } catch (e) {
      setCardData("Some error occured");
    }
  };

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
