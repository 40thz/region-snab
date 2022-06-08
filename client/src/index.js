import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
// import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        {/* <ParallaxProvider> */}
        <App />
        {/* </ParallaxProvider> */}
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
