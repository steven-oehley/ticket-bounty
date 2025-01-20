import { LucideTicket } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/constants/paths";

import { ThemeSwitcher } from "./theme/ThemeSwitcher";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 top-0 right-0 z-10 py-4 px-8 bg-background/80 ">
      <div className="flex justify-between mb-2">
        <div>
          <Link
            className={`${buttonVariants({
              variant: "ghost",
            })} flex items-center gap-2`}
            href={homePath}
          >
            <LucideTicket />
            <h1 className="text-lg font-semibold">Ticket Bounty</h1>
          </Link>
        </div>
        <div className="flex gap-4">
          <ThemeSwitcher />
          <Link
            className={buttonVariants({ variant: "default" })}
            href={ticketsPath}
          >
            Tickets
          </Link>
        </div>
      </div>
      <Separator />
    </nav>
  );
};
export default Header;
