"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { ticketsPath } from "@/constants/paths";
import { prisma } from "@/lib/prisma";

interface TActionState {
  message: string;
  payload?: FormData;
}

const upsertTicketSchema = z.object({
  title: z.string().nonempty().min(3).max(191),
  content: z.string().nonempty().min(10).max(1024),
});

export const upsertTicket = async (
  ticketId: string | undefined,
  _actionState: TActionState,
  formData: FormData
) => {
  try {
    // validation errors can occur here
    // need to handle them
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    await prisma.ticket.upsert({
      where: { id: ticketId || "" },
      update: data,
      create: data,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return { message: "Failed to create ticket!", payload: formData };
  }

  revalidatePath(ticketsPath);

  if (ticketId) {
    return redirect(ticketsPath);
  }

  return { message: "Ticket created successfully!" };
};
