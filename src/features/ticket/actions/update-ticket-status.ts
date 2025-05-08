'use server';

import { revalidatePath } from 'next/cache';

import {
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import { ticketsPath } from '@/constants/paths';
import { TicketStatus } from '@/generated/prisma';
import { prisma } from '@/lib/prisma';

export const updateTicketStatus = async (
  ticketId: string,
  status: TicketStatus,
) => {
  try {
    await prisma.ticket.update({
      data: {
        status,
      },
      where: {
        id: ticketId,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  revalidatePath(ticketsPath);

  return toActionState('Ticket status updated successfully');
};
