'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { ticketsPath } from '@/constants/paths';
import { prisma } from '@/lib/prisma';

// "Upsert" is a database operation that combines "update" and "insert" functionality. When you perform an upsert:
// If the record already exists in the database, it updates that record with new values
// If the record doesn't exist yet, it inserts a new record

export const upserticket = async (ticketId: string, formData: FormData) => {
  const data = {
    content: formData.get('content'),
    title: formData.get('title'),
  };

  if (!ticketId) {
    // If ticketId is an empty string, create a new ticket
    await prisma.ticket.create({
      data: {
        content: data.content as string,
        title: data.title as string,
      },
    });
  } else {
    // If ticketId is provided, update the existing ticket
    await prisma.ticket.update({
      data: {
        content: data.content as string,
        title: data.title as string,
      },
      where: {
        id: ticketId,
      },
    });
  }
  // Revalidate the tickets path to ensure the latest data is fetched for both cases
  revalidatePath(ticketsPath);
  redirect(ticketsPath);
};
