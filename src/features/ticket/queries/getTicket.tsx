import { type Ticket as TicketType } from "@/features/ticket/types";
import { prisma } from "@/lib/prisma";

export const getTicket = async (
  ticketId: string
): Promise<TicketType | null> => {
  try {
    return (
      (await prisma.ticket.findUnique({
        where: { id: ticketId },
      })) || null
    );
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch ticket");
  }
};
