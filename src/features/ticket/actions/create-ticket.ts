'use server';

import { revalidatePath } from 'next/cache';

import { ticketsPath } from '@/constants/paths';
import { prisma } from '@/lib/prisma';

const createTicket = async (formData: FormData) => {
  const data = {
    content: formData.get('content'),
    title: formData.get('title'),
  };
  await prisma.ticket.create({
    data: {
      content: data.content as string,
      title: data.title as string,
    },
  });
  revalidatePath(ticketsPath);
};
export default createTicket;
