import {
  useState,
  useCallback,
  type ReactNode,
  type PropsWithChildren,
  useMemo,
} from "react";
import ModalContext from "./Modal.context";

export type ModalContent = string | ReactNode | null;


export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ModalContent>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const providerValues = useMemo(() => {
    return { open, close, setContent, isOpen, content };
  }, [open, close, setContent, isOpen, content]);

  return (
    <ModalContext.Provider
      value={providerValues}
    >
      {children}
    </ModalContext.Provider>
  );
};
