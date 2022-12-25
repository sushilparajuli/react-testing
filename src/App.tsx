import React from "react";
import { JobForm } from "./components/JobForm/JobForm";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./providers/AppProviders";
function App() {
  return (
    <AppProviders>
      <div className="App">
        <JobForm />
        <hr />
        <Counter />
        <hr />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
