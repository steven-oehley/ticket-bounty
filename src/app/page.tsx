import Link from "next/link";

import { ticketsPath } from "@/constants/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home Page</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Complete tickets, get loot! 🏆
        </p>
        <Link href={ticketsPath} className="text-sm underline">
          Go To Tickets
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
