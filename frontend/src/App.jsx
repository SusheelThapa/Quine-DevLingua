import { useRef, useEffect } from "react";
import Typed from "typed.js";

const App = () => {
  const typed_text = useRef(null);

  useEffect(() => {
    const typed = new Typed(typed_text.current, {
      strings: ["Languages", "Reviews", "Quizzes"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      loop: true,
      showCursor: true,
      cursorChar: "🔥",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-black w-screen   h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-8xl m-10">
        <span className="text-white">dev</span>
        <span className="text-green-400	bold underline">Quine</span>
      </h1>
      <div className="text-4xl font-family-poppins">
        Transforming Coding with{" "}
        <span
          className="text-orange-500 underline bold"
          ref={typed_text}
        ></span>
        .
      </div>
    </div>
  );
};

export default App;
