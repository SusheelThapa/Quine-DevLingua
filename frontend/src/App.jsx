import React from "react";
import { Routes, Route } from "react-router-dom";

import ParticleAnimation from "./components/ParticleAnimation";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ParticleAnimation />
              <LandingPage />
            </>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
