"use client";

import { Ticket } from "@prisma/client";
import clsx from "clsx";
import { LucideTrash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { deleteTicket } from "../actions/deleteTicket";
import { TICKET_ICONS } from "../constants";
import TicketItemButton from "./TicketItemButton";

interface TicketItemProps {
  ticket: Ticket;
  isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail = false }: TicketItemProps) => {
  const handleDeleteTicket = async () => {
    await deleteTicket(ticket.id);
  };

  const deleteButton = (
    <Button variant="outline" size="icon" onClick={handleDeleteTicket}>
      <LucideTrash />
    </Button>
  );

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
      {!isDetail ? <TicketItemButton ticketId={ticket.id} /> : deleteButton}
    </div>
  );
};
export default TicketItem;
