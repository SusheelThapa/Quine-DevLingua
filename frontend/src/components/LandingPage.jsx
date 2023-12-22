import { useRef, useEffect } from "react";
import Typed from "typed.js";

const LandingPage = () => {
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
      shuffle: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-transparent w-screen   h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-8xl m-10">
        <span className="text-white">dev</span>
        <span className="text-green-400	bold underline">Lingua</span>
      </h1>
      <div className="text-4xl  mb-5">
        Transforming Coding with{" "}
        <span
          className="text-orange-500 underline bold"
          ref={typed_text}
        ></span>
        .
      </div>
      <button className="rounded-[15px] bg-teal-500 m-6 py-3 px-4 text-3xl font-semibold  font-family-poppins tracking-wider hover:bg-teal-700">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
