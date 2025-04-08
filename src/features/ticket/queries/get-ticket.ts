import { initialTickets } from '@/data/data';

import { Ticket } from '../types';

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  const foundTicket =
    initialTickets.find((ticket) => ticket.id === ticketId) || null;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(foundTicket);
  });
};
