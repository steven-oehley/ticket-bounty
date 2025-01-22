import initialTickets from "@/data/data";
import { type Ticket as TicketType } from "@/features/ticket/types";

// mimic client side data fetching

export const getTicket = async (
  ticketId: string
): Promise<TicketType | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const ticket = initialTickets.find(
    (ticket) => ticket.id === parseInt(ticketId)
  );
  return ticket;
};
