import clsx from "clsx";
import Link from "next/link";

import { TICKET_ICONS } from "@/constants/constants";
import { ticketPath } from "@/constants/paths";
import initialTickets from "@/data/data";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-sm text-muted-foreground mb-4">
          All your tickets in one place
        </p>
      </div>
      <ul className="space-y-4 flex-1 flex flex-col items-center">
        {initialTickets.map((ticket) => (
          <li
            key={ticket.id}
            className="w-full max-w-[420px] p-4 border border-slate-100 rounded-md animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out"
          >
            <h3 className="font-bold text-lg">{ticket.title}</h3>
            <p
              className={clsx("text-slate-500", "mb-2", {
                "line-through": ticket.status === "DONE",
              })}
            >
              {ticket.content.split(" ").slice(0, 5).join(" ")}....
            </p>
            <div>{TICKET_ICONS[ticket.status]}</div>

            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View Ticket Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TicketsPage;
