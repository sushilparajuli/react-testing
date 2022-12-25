import React from "react";
import { JobForm } from "./components/JobForm/JobForm";
import "./App.css";
import { Counter } from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <JobForm />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
