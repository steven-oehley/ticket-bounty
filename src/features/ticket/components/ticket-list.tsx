import { getTickets } from '../queries/get-tickets';

import TicketItem from './ticket-item';

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} previewCard={true} ticket={ticket} />
      ))}
    </div>
  );
};
export default TicketList;
