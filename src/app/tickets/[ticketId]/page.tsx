import Link from 'next/link';

import Placeholder from '@/components/placeholder';
import { buttonVariants } from '@/components/ui/button';
import { ticketsPath } from '@/constants/paths';
import { initialTickets } from '@/data/data';

interface TicketPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <Placeholder
        button={
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={ticketsPath}
          >
            Go back to Tickets Page
          </Link>
        }
        label="Ticket not found"
      />
    );
  }

  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
};
export default TicketPage;
