import React from "react";
import { DialogProvider } from "./components/DialogContext";
import Component1 from "./components/Component1";

function App() {
  return (
    <DialogProvider>
      <Component1 />
    </DialogProvider>
  );
}

export default App;
