import React from "react";
import { useRoutes } from "./routes";

const App = () => {
  const routes = useRoutes();
  return (
    <div>
      <div className="App">{routes}</div>
    </div>
  );
};

export default App;
