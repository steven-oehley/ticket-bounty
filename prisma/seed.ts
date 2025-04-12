import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

const tickets = [
  {
    content: 'User reported a login issue on mobile devices.',
    status: 'DONE' as const, // Using 'as const' for type safety
    title: 'Fix Mobile Login Bug',
  },
  {
    content: 'Implement dark mode toggle for better accessibility.',
    status: 'OPEN' as const,
    title: 'Add Dark Mode Support',
  },
  {
    content: 'Integrate payment gateway for premium subscriptions.',
    status: 'IN_PROGRESS' as const,
    title: 'Payment Integration',
  },
  {
    content: 'Create onboarding tutorial for new users.',
    status: 'OPEN' as const,
    title: 'Design Onboarding Flow',
  },
  {
    content: 'Optimize image loading performance on homepage.',
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
