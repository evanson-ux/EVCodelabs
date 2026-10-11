import type { ReactNode } from "react";
import { createContext, useContext, useState, useCallback } from "react";

interface ContactModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ContactModalContext.Provider>
  );
}
