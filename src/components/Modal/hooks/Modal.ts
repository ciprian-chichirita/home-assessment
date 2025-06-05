import { useContext } from "react";
import { ModalContext, type ModalContextType } from "../context/Modal.context";

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
