import React, { useContext } from "react";
import { DialogContext } from "./DialogContext";

export default function Component2() {
  const { dialogIsActive, handleDialog, dialogContent } = useContext(
    DialogContext
  );

  return (
    <button
      className="bg-pink-400 text-white py-3 px-6 text-2xl font-bold rounded-xl focus:outline-none hover:bg-pink-300 transition ease-out duration-500 shadow-xl"
      onClick={() =>
        handleDialog({
          title: "Oh,Hi again",
          description: "This message is came from component 2",
          onOK: () => {
            console.log("Nice to meet you");
          },
        })
      }
    >
      Then Click me
    </button>
  );
}
