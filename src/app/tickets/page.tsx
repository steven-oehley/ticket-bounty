"use client";

import { useEffect, useState } from "react";

import Heading from "@/components/Heading";
import TicketItem from "@/features/ticket/components/TicketItem";
import { getTickets } from "@/features/ticket/queries/getTickets";
import { Ticket } from "@/features/ticket/types";

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const tickets = await getTickets();
      setTickets(tickets as Ticket[]);
    };

    fetchTickets();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place" />
      <div className="space-y-4 flex-1 flex flex-col items-center animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;
