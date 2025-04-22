'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { z } from 'zod';

import { setCookieByKey } from '@/actions/cookies';
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import { ticketPath, ticketsPath } from '@/constants/paths';
import { prisma } from '@/lib/prisma';
import { toCent } from '@/utils/currency';

// "Upsert" is a database operation that combines "update" and "insert" functionality. When you perform an upsert:
// If the record already exists in the database, it updates that record with new values
// If the record doesn't exist yet, it inserts a new record

const upsertTicketSchema = z.object({
  bounty: z.coerce
    .number()
    .positive('Bounty must be a positive number')
    .min(1, 'Bounty must be at least 1')
    .max(10000, 'Bounty must be at most 10000'),
  content: z
    .string()
    .nonempty('Content is required')
    .trim()
    .min(15, 'Content must be at least 3 characters long')
    .max(191, 'Content is too long'),
  deadline: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format. Use YYYY-MM-DD'),
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
      bounty: formData.get('bounty'),
      content: formData.get('content'),
      deadline: formData.get('deadline'),
      title: formData.get('title'),
    });

    // data transformation to ensure the date is in the correct format
    const dbData = {
      ...data,
      bounty: toCent(data.bounty),
    };

    // try and upsert
    await prisma.ticket.upsert({
      create: dbData,
      update: dbData,
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
    setCookieByKey('toast', 'Ticket updated successfully');
    redirect(ticketPath(ticketId));
  }

  // when using actionState, we need to return the state object
  return toActionState('Ticket created successfully');
};
