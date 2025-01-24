import { PrismaClient, TicketStatus } from "@prisma/client";

const prisma = new PrismaClient();

export const initialTickets = [
  {
    title: "Implement User Authentication",
    status: TicketStatus.OPEN,
    content: "Set up JWT authentication system with login/logout functionality",
  },
  {
    title: "Fix Navigation Menu Bug",
    status: TicketStatus.DONE,
    content: "Resolve dropdown menu not closing on mobile devices",
  },
  {
    title: "Add Payment Integration",
    status: TicketStatus.IN_PROGRESS,
    content: "Integrate Stripe payment gateway for premium subscriptions",
  },
  {
    title: "Optimize Image Loading",
    status: TicketStatus.OPEN,
    content: "Implement lazy loading for better performance on image gallery",
  },
  {
    title: "Update Documentation",
    status: TicketStatus.DONE,
    content: "Update API documentation with new endpoints and examples",
  },
];

const seed = async () => {
  const t0 = performance.now();

  await prisma.ticket.deleteMany({});
  await prisma.ticket.createMany({ data: initialTickets });

  const t1 = performance.now();

  console.log(`Seeded database in ${t1 - t0}ms`);
};

seed();
