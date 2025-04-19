'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { ticketsPath } from '@/constants/paths';
import { prisma } from '@/lib/prisma';

export const updateTicket = async (ticketId: string, formData: FormData) => {
  const data = {
    content: formData.get('content'),
    title: formData.get('title'),
  };
  await prisma.ticket.update({
    data: {
      content: data.content as string,
      title: data.title as string,
    },
    where: {
      id: ticketId,
    },
  });
  revalidatePath(ticketsPath);
  redirect(ticketsPath);
};
