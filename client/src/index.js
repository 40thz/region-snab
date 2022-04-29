import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

const Root = (
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(Root, rootElement);
} else {
  render(Root, rootElement);
}
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
