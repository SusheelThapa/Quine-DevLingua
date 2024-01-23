import { useState } from "react";
import Editor from "./common/Editor";
import ParticleAnimation from "./common/ParticleAnimation";

import codeLingoParticleAnimationConfig from "../json/codeLingo.json";
import { askOpenAI } from "../services/askOpenAI";

const CodeLingo = () => {
  const [sourceCode, setSourceCode] = useState("");
  const [sourceCodeLangugae, setSourceCodeLanguage] = useState("javascript");
  const [sourceCodeTheme, setSourceCodeTheme] = useState("kuroir");

  const [targetCode, setTargetCode] = useState("");
  const [targetCodeLangugae, setTargetCodeLanguage] = useState("python");
  const [targetCodeTheme, setTargetCodeTheme] = useState("kuroir");

  const handleTranslateButton = async () => {
    const prompt = ` Translate the following ${sourceCode} to ${targetCodeLangugae} `;

    try {
      const response = await askOpenAI("CodeLingo", prompt);
      setTargetCode(response);
    } catch (e) {
      setTargetCode("Some unexpected error occured while making api call.");
    }
  };

  return (
    <>
      <ParticleAnimation config={codeLingoParticleAnimationConfig} />
      <div className="mx-64 flex flex-col justify-center items-center bg-transparent mb-10">
        <h1 className=" text-5xl flex text-wrap justify-center text-center items-center m-5 p-4  w-2/3">
          Translate from one programming language to another
        </h1>
        <div className=" bg-gray-50 px-5 m-5  rounded-3xl flex justify-around items-center flex-col">
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
      </div>
    </>
  );
};

export default CodeLingo;
