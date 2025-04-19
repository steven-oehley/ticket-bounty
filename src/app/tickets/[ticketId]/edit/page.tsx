import { notFound } from 'next/navigation';

import CardCompact from '@/components/card-compact';
import TicketUpsertForm from '@/features/ticket/components/ticket-upsert-form';
import { getTicket } from '@/features/ticket/queries/get-ticket';

interface TicketEditPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        className="animate-fade-from-top w-full max-w-[450px]"
        description="Edit an existing ticket"
        title="Edit Ticket"
      >
        <TicketUpsertForm ticket={ticket} />
      </CardCompact>
    </div>
  );
};
export default TicketEditPage;
