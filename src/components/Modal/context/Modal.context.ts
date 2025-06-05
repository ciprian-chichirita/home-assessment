import { createContext } from "react";
import type { ModalContent } from "./Modal.provider";

export interface ModalContextType {
  open: () => void;
  close: () => void;
  setContent: (content: ModalContent) => void;
  isOpen: boolean;
  content: ModalContent;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export default ModalContext;
