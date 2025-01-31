"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ticketsPath } from "@/constants/paths";
import { prisma } from "@/lib/prisma";

export const editTicket = async (ticketId: string, formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.update({
    where: { id: ticketId },
    data,
  });

  revalidatePath(ticketsPath);
  redirect(ticketsPath);
};
