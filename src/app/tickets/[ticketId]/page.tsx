import { notFound } from 'next/navigation';

import RedirectToast from '@/components/redirect-toast';
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
    notFound();
  }

  return (
    <>
      <div className="animate-fade-from-top flex flex-col items-center justify-center gap-y-8">
        <TicketItem ticket={ticket} />
      </div>
      <RedirectToast />
    </>
  );
};
export default TicketPage;
