import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

const tickets = [
  {
    bounty: 499,
    content: 'User reported a login issue on mobile devices.',
    deadline: new Date().toISOString().split('T')[0],
    status: 'DONE' as const,
    // Using 'as const' for type safety
    title: 'Fix Mobile Login Bug',
  },
  {
    bounty: 525,
    content: 'Implement dark mode toggle for better accessibility.',
    deadline: new Date().toISOString().split('T')[0],
    status: 'OPEN' as const,
    title: 'Add Dark Mode Support',
  },
  {
    bounty: 315,
    content: 'Integrate payment gateway for premium subscriptions.',
    deadline: new Date().toISOString().split('T')[0],
    status: 'IN_PROGRESS' as const,
    title: 'Payment Integration',
  },
  {
    bounty: 200,
    content: 'Create onboarding tutorial for new users.',
    deadline: new Date().toISOString().split('T')[0],
    status: 'OPEN' as const,
    title: 'Design Onboarding Flow',
  },
  {
    bounty: 150,
    content: 'Optimize image loading performance on homepage.',
    deadline: new Date().toISOString().split('T')[0],
    status: 'DONE' as const,
    title: 'Homepage Image Optimization',
  },
];

const seed = async () => {
  const t0 = performance.now();
  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({
    data: tickets,
  });
  const t1 = performance.now();
  const time = t1 - t0;
  console.warn(`Seeding completed successfully in ${Math.floor(time)}ms! 🌱`);
};

seed();
