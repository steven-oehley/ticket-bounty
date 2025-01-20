import initialTickets from "@/data/data";

// mimic client side data fetching

export const getTickets = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
