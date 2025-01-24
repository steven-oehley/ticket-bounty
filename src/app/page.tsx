import Link from "next/link";

import Heading from "@/components/Heading";
import { ticketsPath } from "@/constants/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home" description="Complete tickets, get loot! 🏆" />

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath} className="text-md underline">
          Go to tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
