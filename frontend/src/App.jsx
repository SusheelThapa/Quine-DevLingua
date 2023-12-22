import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

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
      shuffle: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      {init && <Particles options={particlesOptions} />}
      <div className="bg-transparent w-screen   h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-8xl m-10">
          <span className="text-white">dev</span>
          <span className="text-green-400	bold underline">Quine</span>
        </h1>
        <div className="text-4xl font-family-poppins mb-5">
          Transforming Coding with{" "}
          <span
            className="text-orange-500 underline bold"
            ref={typed_text}
          ></span>
          .
        </div>
        <button className="rounded-[15px] bg-teal-500 m-6 py-3 px-4 text-3xl font-semibold  font-family-poppins tracking-wider hover:bg-teal-700">
          Getting Started
        </button>
      </div>
    </div>
  );
};

export default App;
