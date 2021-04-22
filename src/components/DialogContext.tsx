import React, { createContext } from "react";
import useDialog from "./useDialog";
import MyDialog from "./Dialog";

import { Dialog, DialogProviderValue } from "../types";

type Props = {
  children: React.ReactNode;
};

const initialDialog: DialogProviderValue = {
  dialogIsActive: false,
  handleDialog: () => {},
  dialogContent: {
    title: "Sure?",
    description: "Are you sure?",
    onOK: () => {},
  },
};

const DialogContext = createContext(initialDialog);

const DialogProvider = ({ children }: Props) => {
  const { dialogContent, dialogIsActive, handleDialog } = useDialog();
  return (
    <DialogContext.Provider
      value={{ dialogIsActive, handleDialog, dialogContent }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export { DialogContext, DialogProvider };
