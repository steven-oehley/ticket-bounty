import initialTickets from "@/data/data";

import { Ticket } from "../types";

// mimic client side data fetching

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
