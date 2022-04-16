import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes";
import "./style/app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AllRoutes />
      </div>
    </Router>
  );
};

export default App;
