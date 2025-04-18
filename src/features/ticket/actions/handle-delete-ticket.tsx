'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { ticketsPath } from '@/constants/paths';
import { prisma } from '@/lib/prisma';

export const handleDeleteTicket = async (ticketId: string) => {
  await prisma.ticket.delete({
    where: {
      id: ticketId,
    },
  });
  redirect(ticketsPath);
  revalidatePath(ticketsPath);
};
