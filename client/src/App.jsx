import React from "react";
import Jobs from "./components/Jobs/Jobs";
import { useRoutes } from "./routes";

const App = () => {
  const routes = useRoutes();

  return (
    <div>
      <div className="overlay"></div>
      <div className="App">{routes}</div>
    </div>
  );
};

export default App;
