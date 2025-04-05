import Link from 'next/link';

import Placeholder from '@/components/placeholder';
import { buttonVariants } from '@/components/ui/button';
import { ticketsPath } from '@/constants/paths';
import { initialTickets } from '@/data/data';
import TicketItem from '@/features/ticket/components/ticket-item';

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
    <div className="animate-fade-from-top flex flex-col items-center justify-center gap-y-8">
      <TicketItem ticket={ticket} />
    </div>
  );
};
export default TicketPage;
