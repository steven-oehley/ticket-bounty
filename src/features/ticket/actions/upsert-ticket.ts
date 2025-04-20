'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { z } from 'zod';

import {
  ActionState,
  fromErrorToActionState,
} from '@/components/form/utils/to-action-state';
import { ticketsPath } from '@/constants/paths';
import { prisma } from '@/lib/prisma';

// "Upsert" is a database operation that combines "update" and "insert" functionality. When you perform an upsert:
// If the record already exists in the database, it updates that record with new values
// If the record doesn't exist yet, it inserts a new record

const upsertTicketSchema = z.object({
  content: z
    .string()
    .nonempty('Content is required')
    .trim()
    .min(15, 'Content must be at least 3 characters long')
    .max(191, 'Content is too long'),
  title: z
    .string()
    .nonempty('Title is required')
    .trim()
    .min(3, 'Title must be at least 15 characters long')
    .max(1024, 'Title is too long'),
});

export const upserticket = async (
  ticketId: string | undefined,
  // when using actionState, we need to pass in the state object and taken in here
  actionState: ActionState,
  formData: FormData,
) => {
  try {
    // try and validate
    const data = upsertTicketSchema.parse({
      content: formData.get('content'),
      title: formData.get('title'),
    });

    // try and upsert
    await prisma.ticket.upsert({
      create: data,
      update: data,
      where: {
        id: ticketId || '',
      },
    });
  } catch (error) {
    // improve error handling by extracting error handling to function
    return fromErrorToActionState(error, formData);
  }

  // Revalidate the tickets path to ensure the latest data is fetched for both cases
  revalidatePath(ticketsPath);

  // Redirect to the tickets page after upsert if the ticketId is provided
  if (ticketId) {
    actionState.message = 'Ticket updated successfully';
    redirect(ticketsPath);
  }
  // when using actionState, we need to return the state object

  return {
    fieldErrors: {},
    message: 'Ticket created successfully',
    payload: formData,
  };
};
