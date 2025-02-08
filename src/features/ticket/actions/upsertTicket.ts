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
  title: z
    .string()
    .nonempty({ message: "Title is required" })
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(191, { message: "Title cannot exceed 191 characters" }),
  content: z
    .string()
    .nonempty({ message: "Content is required" })
    .min(10, { message: "Content must be at least 10 characters long" })
    .max(1024, { message: "Content cannot exceed 1024 characters" }),
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
