import React, { useContext } from "react";
import { DialogContext } from "./DialogContext";

export default function Component1() {
  const { dialogIsActive, handleDialog, dialogContent } = useContext(
    DialogContext
  );

  return (
    <button
      className="bg-green-400 text-white py-3 px-6 text-2xl font-bold rounded-xl focus:outline-none hover:bg-green-300 transition ease-out duration-500 shadow-xl"
      onClick={() =>
        handleDialog({
          title: "Hi",
          description: "This message is came from component 1",
          onOK: () => {
            console.log("YOOOOO");
          },
        })
      }
    >
      Click me
    </button>
  );
}
