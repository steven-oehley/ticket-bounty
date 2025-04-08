import { Separator } from '@/components/ui/separator';
import TicketItem from '@/features/ticket/components/ticket-item';
import { getTickets } from '@/features/ticket/queries/get-tickets';

const TicketPage = async () => {
  const tickets = await getTickets();
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-muted-foreground text-sm">All your tickets</p>
      </div>
      <Separator />
      <div className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} showOptions={true} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};
export default TicketPage;
