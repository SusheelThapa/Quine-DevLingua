import React from "react";
import { Routes, Route } from "react-router-dom";

import ParticleAnimation from "./components/ParticleAnimation";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <ParticleAnimation />
              <LandingPage />
            </>
          }
        />
        <Route exact path="/homepage" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
