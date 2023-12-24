import { useState } from "react";
import Editor from "./common/Editor";

const CodeLingo = () => {
  const [sourceCode, setSourceCode] = useState(null);
  const [sourceCodeLangugae, setSourceCodeLanguage] = useState("javascript");
  const [sourceCodeTheme, setSourceCodeTheme] = useState("tomorrow");

  const [targetCode, setTargetCode] = useState(null);
  const [targetCodeLangugae, setTargetCodeLanguage] = useState("python");
  const [targetCodeTheme, setTargetCodeTheme] = useState("kuroir");

  const handleTranslateButton = () => {
    console.log(`Translating source code ${sourceCode} `);
  };
  return (
    <div className=" bg-gray-50 px-5  mx-64 m-16 rounded-3xl flex justify-around items-center flex-col">
      <div className="flex justify-center items-center ">
        <Editor
          className="w-1/2"
          autofocus={true}
          code={sourceCode}
          onCodeChange={setSourceCode}
          language={sourceCodeLangugae}
          theme={sourceCodeTheme}
          onLanguageChange={setSourceCodeLanguage}
          onThemeChange={setSourceCodeTheme}
        />
        <Editor
          className="w-1/2"
          read_only={true}
          code={targetCode}
          onCodeChange={setTargetCode}
          language={targetCodeLangugae}
          theme={targetCodeTheme}
          onLanguageChange={setTargetCodeLanguage}
          onThemeChange={setTargetCodeTheme}
        />
      </div>
      <div>
        <button
          onClick={handleTranslateButton}
          className="bg-blue-500 text-white  py-2 px-4 mb-10 w-96 rounded-lg text-xl hover:bg-blue-600"
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default CodeLingo;
