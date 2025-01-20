import clsx from "clsx";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketPath } from "@/constants/paths";

import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

interface TicketItemProps {
  ticket: Ticket;
}

const TicketItem = ({ ticket }: TicketItemProps) => {
  return (
    <Card className="w-full max-w-[420px]">
      <CardHeader>
        <div className="flex gap-2">
          {TICKET_ICONS[ticket.status]}
          <span className="text-slate-500">Ticket ID: {ticket.id}</span>
        </div>
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
  );
};
export default TicketItem;
