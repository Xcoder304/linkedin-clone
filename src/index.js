import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { store } from "./App/Redux/app/store";
import { Provider } from "react-redux";
import "./App/style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
