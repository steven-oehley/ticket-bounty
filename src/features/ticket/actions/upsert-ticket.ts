'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { ticketsPath } from '@/constants/paths';
import { prisma } from '@/lib/prisma';

// "Upsert" is a database operation that combines "update" and "insert" functionality. When you perform an upsert:
// If the record already exists in the database, it updates that record with new values
// If the record doesn't exist yet, it inserts a new record

export const upserticket = async (
  ticketId: string | undefined,
  // when using actionState, we need to pass in the state object
  actionState: { message: string },
  formData: FormData,
) => {
  const data = {
    content: formData.get('content') as string,
    title: formData.get('title') as string,
  };

  await prisma.ticket.upsert({
    create: data,
    update: data,
    where: {
      id: ticketId || '',
    },
  });

  // Revalidate the tickets path to ensure the latest data is fetched for both cases
  revalidatePath(ticketsPath);

  // Redirect to the tickets page after upsert if the ticketId is provided
  if (ticketId) {
    actionState.message = 'Ticket updated successfully';
    redirect(ticketsPath);
  }
  // when using actionState, we need to return the state object

  return {
    message: 'Ticket created successfully',
  };
};
