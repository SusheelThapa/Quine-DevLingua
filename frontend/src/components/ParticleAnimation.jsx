import React, { useState, useEffect } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import particlesOptions from "../json/particles.json";

const ParticleAnimation = () => {
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
    <React.Fragment>
      {init && <Particles options={particlesOptions} />}
    </React.Fragment>
  );
};

export default ParticleAnimation;
