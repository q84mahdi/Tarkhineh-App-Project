import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import useFetch from "../Hooks/useFetch";
import type { Branch } from "../Types/branchTypes";

interface BranchesContextValues {
  ekbatanBranch: Branch | null;
  setEkbatanBranch: React.Dispatch<React.SetStateAction<Branch | null>>;
  chalosBranch: Branch | null;
  setChalosBranch: React.Dispatch<React.SetStateAction<Branch | null>>;
  aghdasiyehBranch: Branch | null;
  setAghdasiyehBranch: React.Dispatch<React.SetStateAction<Branch | null>>;
  vanakBranch: Branch | null;
  setVanakBranch: React.Dispatch<React.SetStateAction<Branch | null>>;
}

const BranchesContext = createContext<BranchesContextValues>(
  {} as BranchesContextValues,
);

export function BranchesProvider({ children }: { children: ReactNode }) {
  const [ekbatanBranch, setEkbatanBranch] = useState<Branch | null>(null);
  const [chalosBranch, setChalosBranch] = useState<Branch | null>(null);
  const [aghdasiyehBranch, setAghdasiyehBranch] = useState<Branch | null>(null);
  const [vanakBranch, setVanakBranch] = useState<Branch | null>(null);

  const { data: ekbatan } = useFetch<Branch>(
    "https://tarkhineh-app-api.vercel.app/branches/1",
  );
  const { data: chalos } = useFetch<Branch>(
    "https://tarkhineh-app-api.vercel.app/branches/2",
  );
  const { data: aghdasiyeh } = useFetch<Branch>(
    "https://tarkhineh-app-api.vercel.app/branches/3",
  );
  const { data: vanak } = useFetch<Branch>(
    "https://tarkhineh-app-api.vercel.app/branches/4",
  );

  useEffect(() => {
    if (!ekbatan) return;

    setEkbatanBranch(ekbatan);
  }, [ekbatan]);

  useEffect(() => {
    if (!chalos) return;

    setChalosBranch(chalos);
  }, [chalos]);

  useEffect(() => {
    if (!aghdasiyeh) return;

    setAghdasiyehBranch(aghdasiyeh);
  }, [aghdasiyeh]);

  useEffect(() => {
    if (!vanak) return;

    setVanakBranch(vanak);
  }, [vanak]);

  return (
    <BranchesContext.Provider
      value={{
        ekbatanBranch,
        setEkbatanBranch,
        chalosBranch,
        setChalosBranch,
        aghdasiyehBranch,
        setAghdasiyehBranch,
        vanakBranch,
        setVanakBranch,
      }}
    >
      {children}
    </BranchesContext.Provider>
  );
}

export function useBranches() {
  const context = useContext(BranchesContext);

  if (context === undefined)
    throw new Error("BranchesContext was used outside of BranchesProvider");

  return context;
}
