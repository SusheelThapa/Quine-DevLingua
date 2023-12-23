import Editor from "./common/Editor";

const CodeLingo = () => {
  return (
    <div className="flex justify-between bg-gray-50 items-center px-5  mx-64 m-16 rounded-3xl">
      <Editor className="w-1/2" />
      <Editor className="w-1/2" />
    </div>
  );
};

export default CodeLingo;
