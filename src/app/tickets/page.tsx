import clsx from "clsx";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <div className="space-y-4 flex-1 flex flex-col items-center animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <div className="w-1/12">{TICKET_ICONS[ticket.status]}</div>
              <span className="text-slate-500">Ticket ID: {ticket.id}</span>
              <CardTitle>
                <span className="font-bold text-lg">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span
                className={clsx("text-slate-500", "mb-2", {
                  "line-through": ticket.status === "DONE",
                })}
              >
                {ticket.content.split(" ").slice(0, 5).join(" ")}....
              </span>
            </CardContent>
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                View Ticket Details
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;
