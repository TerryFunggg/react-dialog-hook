import React from "react";
import { DialogProvider } from "./components/DialogContext";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  return (
    <DialogProvider>
      <div className="flex flex-col justify-around items-center h-screen m-auto">
        <Component1 />
        <Component2 />
      </div>
    </DialogProvider>
  );
}

export default App;
