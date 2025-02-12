"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ticketsPath } from "@/constants/paths";
import { prisma } from "@/lib/prisma";

import { setCookieByKey } from "./cookies";

export const deleteTicket = async (ticketId: string) => {
  await prisma.ticket.delete({
    where: { id: ticketId },
  });

  revalidatePath(ticketsPath);
  await setCookieByKey("toast", "Ticket deleted successfully!");
  redirect(ticketsPath);
};
