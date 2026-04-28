import BranchCard from "./BranchCard";
import useFetch from "../../Hooks/useFetch";
import type { Branch } from "../../Types/BranchTypes";

function BranchCards() {
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

  if (!ekbatan || !chalos || !aghdasiyeh || !vanak) return null;

  return (
    <div className="container relative py-8">
      <h2 className="mb-3 text-center font-bold text-black md:text-lg lg:mb-8 lg:text-xl xl:text-2xl">
        ترخینه گردی
      </h2>

      <div className="grid grid-cols-1 grid-rows-4 justify-items-center gap-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        <BranchCard branch={ekbatan} />

        <BranchCard branch={chalos} />

        <BranchCard branch={aghdasiyeh} />

        <BranchCard branch={vanak} />
      </div>
    </div>
  );
}
export default BranchCards;
