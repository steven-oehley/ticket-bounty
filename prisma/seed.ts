import { PrismaClient, TicketStatus } from "@prisma/client";

const prisma = new PrismaClient();

export const initialTickets = [
  {
    title: "Implement User Authentication",
    status: TicketStatus.OPEN,
    content: "Set up JWT authentication system with login/logout functionality",
    deadline: new Date("2025-03-01").toISOString(), // Convert to ISO string
    bounty: 500,
  },
  {
    title: "Fix Navigation Menu Bug",
    status: TicketStatus.DONE,
    content: "Resolve dropdown menu not closing on mobile devices",
    deadline: new Date("2025-02-25").toISOString(),
    bounty: 200,
  },
  {
    title: "Add Payment Integration",
    status: TicketStatus.IN_PROGRESS,
    content: "Integrate Stripe payment gateway for premium subscriptions",
    deadline: new Date("2025-03-15").toISOString(),
    bounty: 1000,
  },
  {
    title: "Optimize Image Loading",
    status: TicketStatus.OPEN,
    content: "Implement lazy loading for better performance on image gallery",
    deadline: new Date("2025-03-10").toISOString(),
    bounty: 300,
  },
  {
    title: "Update Documentation",
    status: TicketStatus.DONE,
    content: "Update API documentation with new endpoints and examples",
    deadline: new Date("2025-02-20").toISOString(),
    bounty: 150,
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
