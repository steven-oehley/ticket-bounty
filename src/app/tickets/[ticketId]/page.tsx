import Link from 'next/link';

import Placeholder from '@/components/placeholder';
import { buttonVariants } from '@/components/ui/button';
import { ticketsPath } from '@/constants/paths';
import TicketItem from '@/features/ticket/components/ticket-item';
import { getTicket } from '@/features/ticket/queries/get-ticket';

interface TicketPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  // two seconds delay here can cause a full page blocking
  // solution is streaming
  const ticket = await getTicket(ticketId);

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
