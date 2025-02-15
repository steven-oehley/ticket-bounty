"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import {
  fromErrorToActionState,
  TActionState,
  toActionState,
} from "@/components/form/utils/fromErrorToActionState";
import { ticketsPath } from "@/constants/paths";
import { prisma } from "@/lib/prisma";

import { setCookieByKey } from "./cookies";

const upsertTicketSchema = z.object({
  title: z
    .string()
    .trim()
    .nonempty({ message: "Title is required" })
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(191, { message: "Title cannot exceed 191 characters" }),
  content: z
    .string()
    .trim()
    .nonempty({ message: "Content is required" })
    .min(10, { message: "Content must be at least 10 characters long" })
    .max(1024, { message: "Content cannot exceed 1024 characters" }),
});

export const upsertTicket = async (
  ticketId: string | undefined,
  _actionState: TActionState,
  formData: FormData
): Promise<TActionState> => {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    await prisma.ticket.upsert({
      where: { id: ticketId || "" },
      update: data,
      create: data,
    });
  } catch (e) {
    console.error(e);
    return fromErrorToActionState(e, formData);
  }

  // Handle redirect outside of try-catch, similar to deleteTicket
  revalidatePath(ticketsPath);

  if (ticketId) {
    await setCookieByKey("toast", "Ticket updated successfully!");
    redirect(ticketsPath);
  }

  return toActionState("Ticket created successfully!");
};
