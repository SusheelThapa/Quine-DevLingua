import { useState, useEffect } from "react";

const App = () => {
  const texts = ["Languages", "Reviews", "Quizzes"];

  const [text, setText] = useState(texts[0]);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 2000);

    return () => clearInterval(timer);
  });

  return (
    <div className="bg-black w-screen   h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-8xl m-10">
        <span className="text-white">dev</span>
        <span className="text-green-600	bold underline">Quine</span>
      </h1>
      <div className="text-4xl font-family-poppins">
        Transforming Coding with{" "}
        <span className="text-orange-500 underline bold">{text}</span>.
      </div>
    </div>
  );
};

export default App;
