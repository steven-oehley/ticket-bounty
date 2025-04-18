import { Ticket } from '@/generated/prisma/client';
import { prisma } from '@/lib/prisma';

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  // alternative findUniqueOrThrow to throw an error if not found
  return await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
  });
};
