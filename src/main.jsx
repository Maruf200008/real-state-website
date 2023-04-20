import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from '../src/app/store';
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>

  </Router>
);
