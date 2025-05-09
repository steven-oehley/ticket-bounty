'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { setCookieByKey } from '@/actions/cookies';
import { fromErrorToActionState } from '@/components/form/utils/to-action-state';
import { ticketsPath } from '@/constants/paths';
import { prisma } from '@/lib/prisma';

export const deleteTicket = async (ticketId: string) => {
  try {
    await prisma.ticket.delete({
      where: {
        id: ticketId,
      },
    });
  } catch (error) {
    fromErrorToActionState(error);
  }

  revalidatePath(ticketsPath);
  await setCookieByKey('toast', 'Ticket deleted successfully');
  redirect(ticketsPath);
};
