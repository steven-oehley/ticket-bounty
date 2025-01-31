import { Ticket } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export const getTickets = async (): Promise<Ticket[]> => {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: { createdAt: "desc" },
    });
    return tickets;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Database error:", error.message);
    }
    return [];
  }
};
