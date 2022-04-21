import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login, Home } from "./Pages";
import { Header } from "./Components";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
