// "use server";

// import { revalidatePath } from "next/cache";

// import { ticketsPath } from "@/constants/paths";
// import { prisma } from "@/lib/prisma";

// export const createTicket = async (formData: FormData) => {
//   // TODO: implement create ticket

//   const data = {
//     title: formData.get("title") as string,
//     content: formData.get("content") as string,
//   };

//   await prisma.ticket.create({
//     data,
//   });

//   revalidatePath(ticketsPath);
// };
