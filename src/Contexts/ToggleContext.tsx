import { createContext, useContext, useState, type ReactNode } from "react";

interface ToggleContextValues {
  isToggleOpen: boolean;
  setIsToggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = createContext<ToggleContextValues>(
  {} as ToggleContextValues,
);

export function ToggleProvider({ children }: { children: ReactNode }) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isToggleOpen, setIsToggleOpen }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggle() {
  const context = useContext(ToggleContext);

  if (context === undefined)
    throw new Error("ToggleContext was used outside of ToggleProvider");

  return context;
}
