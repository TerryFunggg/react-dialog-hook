export interface Dialog {
  title: string;
  description: string;
  onOK: () => void;
}

export interface DialogProviderValue {
  dialogIsActive: boolean;
  handleDialog: (context?: Dialog) => void;
  dialogContent: Dialog | null;
}
