import { Ticket } from "@prisma/client";
import clsx from "clsx";
import {
  LucidePencil,
  LucideSquareArrowOutUpRight,
  LucideTrash,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketEditPath, ticketPath } from "@/constants/paths";

import { deleteTicket } from "../actions/deleteTicket";
import { TICKET_ICONS } from "../constants";

interface TicketItemProps {
  ticket: Ticket;
  isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail = false }: TicketItemProps) => {
  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant="outline" size="icon" type="submit">
        <LucideTrash />
      </Button>
    </form>
  );

  const editButton = (
    <Link href={ticketEditPath(ticket.id)} className="text-sm underline">
      <Button variant="outline" size="icon" type="submit">
        <LucidePencil />
      </Button>
    </Link>
  );

  const viewButton = (
    <div>
      <Link href={ticketPath(ticket.id)} className="text-sm underline">
        <Button variant="outline" size="icon">
          <LucideSquareArrowOutUpRight />
        </Button>
      </Link>
    </div>
  );

  // OR CAN DO LIKE THIS
  // <form>
  //   <Button
  //     variant="outline"
  //     size="icon"
  //     type="submit"
  //     formAction={async () => {
  //       "use server";
  //       await deleteTicket(ticket.id);
  //     }}
  //   >
  //     <LucideTrash />
  //   </Button>
  // </form>

  return (
    <div
      className={clsx("w-full flex gap-x-2", {
        "max-w-xl": !isDetail,
        "max-w-2xl": isDetail,
      })}
    >
      <Card className="w-full">
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
            className={clsx("text-slate-500", "mb-2 line-clamp-3", {
              "line-through": ticket.status === "DONE",
            })}
          >
            <span
              className={clsx("whitespace-break-spaces", {
                "line-clamp-3": !isDetail,
              })}
            >
              {ticket.content}
            </span>
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-2">
        {!isDetail ? (
          <>
            {editButton}
            {viewButton}
          </>
        ) : (
          <>
            {editButton}
            {deleteButton}
          </>
        )}
      </div>
    </div>
  );
};
export default TicketItem;
