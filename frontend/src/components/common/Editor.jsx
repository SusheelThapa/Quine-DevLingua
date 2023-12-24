import AceEditor from "react-ace";

import PropTypes from "prop-types";

const Editor = ({
  read_only,
  autofocus,
  code,
  onCodeChange,
  language,
  theme,
  onLanguageChange,
  onThemeChange,
}) => {
  return (
    <div className="m-2 mb-10 p-5">
      <div className="  flex justify-around items-end  mb-8">
        <div className="flex justify-center items-center gap-3">
          <label htmlFor="language" className=" text-center text-lg">
            Language:
          </label>
          <select
            key="language"
            onChange={(e) => {
              onLanguageChange(e.target.value);
            }}
            value={language}
            className="mt-1  w-full text-center py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-indigo-500 sm:text-base appearance-none flex justify-center items-center"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c_cpp">C/C++</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-3">
          <label htmlFor="theme" className=" text-center text-lg">
            Theme:
          </label>
          <select
            id="theme"
            onChange={(e) => {
              onThemeChange(e.target.value);
            }}
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
        fontSize={20}
        onChange={onCodeChange}
        name="code_editor"
        height="65vh"
        width="600px"
        wrapEnabled={true}
        focus={autofocus}
        readOnly={read_only}
        className={`rounded-xl`}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          showGutter: true,
        }}
      />
    </div>
  );
};
Editor.propTypes = {
  read_only: PropTypes.bool,
  autofocus: PropTypes.bool,
  code: PropTypes.string,
  language: PropTypes.string,
  theme: PropTypes.string,
  onCodeChange: PropTypes.func,
  onLanguageChange: PropTypes.func,
  onThemeChange: PropTypes.func,
};

Editor.defaultProps = {
  autofocus: false,
  read_only: false,
};
export default Editor;
