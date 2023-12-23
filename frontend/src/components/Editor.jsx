import { useState } from "react";
import AceEditor from "react-ace";

const Editor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("tomorrow");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="p-4">
      <div className=" ml-4 flex justify-start items-end gap-4 mb-4">
        <div>
          <select
            onChange={handleLanguageChange}
            value={language}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-indigo-500 sm:text-lg appearance-none"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c_cpp">C/C++</option>
          </select>
        </div>
        <div>
          <select
            onChange={handleThemeChange}
            value={theme}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-indigo-500 sm:text-lg appearance-none"
          >
            <option value="monokai">Monokai</option>
            <option value="github">GitHub</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="kuroir">Kuroir</option>
            <option value="twilight">Twilight</option>
          </select>
        </div>
      </div>

      <AceEditor
        mode={language}
        theme={theme}
        value={code}
        fontSize={24}
        onChange={setCode}
        name="code_editor"
        height="70vh"
        width="40%"
        wrapEnabled={true}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: false,
        }}
      />
    </div>
  );
};

export default Editor;
