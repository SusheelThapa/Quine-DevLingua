import { useState } from "react";

import AceEditor from "react-ace";

import PropTypes from "prop-types";

const Editor = ({ read_only, autofocus }) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("kuroir");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="m-2 mb-10 p-5">
      <div className="  flex justify-around items-end  mb-8">
        <div>
          <select
            onChange={handleLanguageChange}
            value={language}
            className="mt-1  w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-indigo-500 sm:text-base appearance-none flex justify-center items-center"
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
            className="mt-1 flex justify-center items-center text-center w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-indigo-500 sm:text-base appearance-none"
          >
            <option value="github">GitHub</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="kuroir">Kuroir</option>
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
        height="65vh"
        width="600px"
        wrapEnabled={true}
        focus={autofocus}
        readOnly={read_only}
        className={`rounded-lg `}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: false,
          showGutter: false,
        }}
      />
    </div>
  );
};
Editor.propTypes = {
  read_only: PropTypes.bool,
  autofocus: PropTypes.bool,
};

Editor.defaultProps = {
  autofocus: false,
  read_only: false,
};
export default Editor;
