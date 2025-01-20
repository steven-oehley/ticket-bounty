import Link from "next/link";

import Heading from "@/components/Heading";
import { ticketsPath } from "@/constants/paths";

const HomePage = () => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading title="Home" description="Complete tickets, get loot! 🏆" />
      </div>
      <div className="flex justify-center">
        <Link className="mt-8 underline" href={ticketsPath}>
          Go to tickets
        </Link>
      </div>
    </>
  );
};
export default HomePage;
