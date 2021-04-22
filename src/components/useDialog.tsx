import React, { useState } from "react";
import { Dialog } from "../types";

const useDialog = () => {
  const [dialogIsActive, setDialogIsActive] = useState(false);
  const [dialogContent, setDialogContent] = useState<Dialog | null>(null);

  const handleDialog = (content?: Dialog) => {
    setDialogIsActive(!dialogIsActive);
    if (content) setDialogContent(content);
  };

  return { dialogIsActive, handleDialog, dialogContent };
};

export default useDialog;
