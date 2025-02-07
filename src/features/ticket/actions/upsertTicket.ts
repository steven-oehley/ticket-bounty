"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ticketsPath } from "@/constants/paths";
import { prisma } from "@/lib/prisma";

export const upsertTicket = async (
  ticketId: string | undefined,
  formData: FormData
) => {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.upsert({
    where: { id: ticketId || "" },
    update: data,
    create: data,
  });

  revalidatePath(ticketsPath);

  if (ticketId) {
    return redirect(ticketsPath);
  }
};
