"use server";

import { prisma } from "@/lib/prisma";

export const deleteTicket = async (ticketId: string) => {
  await prisma.ticket.delete({
    where: { id: ticketId },
  });
};
