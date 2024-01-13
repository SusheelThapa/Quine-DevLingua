import { useState } from "react";
import Editor from "./common/Editor";
import ParticleAnimation from "./common/ParticleAnimation";

import codeLingoParticleAnimationConfig from "../json/codeLingo.json";

const CodeLingo = () => {
  const source_code = `const sum = (a, b) => {
    return a + b;
  };
  
  sum(4,5);
  `;

  const target_code = `
  def sum(a,b):
    return a + b
  
  sum(4,5)
  `;

  const [sourceCode, setSourceCode] = useState(source_code);
  const [sourceCodeLangugae, setSourceCodeLanguage] = useState("javascript");
  const [sourceCodeTheme, setSourceCodeTheme] = useState("kuroir");

  const [targetCode, setTargetCode] = useState(target_code);
  const [targetCodeLangugae, setTargetCodeLanguage] = useState("python");
  const [targetCodeTheme, setTargetCodeTheme] = useState("kuroir");

  const handleTranslateButton = () => {
    console.log(`Translating source code ${sourceCode} `);
    // API CALL
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
