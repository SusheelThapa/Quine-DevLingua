import React from "react";
import { Routes, Route } from "react-router-dom";

import ParticleAnimation from "./components/common/ParticleAnimation";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";

import particlesOptions from "./json/particles.json";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <ParticleAnimation config={particlesOptions} />
              <LandingPage />
            </>
          }
        />
        <Route
          exact
          path="/codeinsight"
          element={<HomePage active_feature="codeinsight" />}
        />
        <Route
          exact
          path="/codemaster"
          element={<HomePage active_feature="codemaster" />}
        />
        <Route
          exact
          path="/codelingo"
          element={<HomePage active_feature="codelingo" />}
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
