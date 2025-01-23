import TicketItem from "@/features/ticket/components/TicketItem";
import { getTickets } from "@/features/ticket/queries/getTickets";

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className="space-y-4 flex-1 flex flex-col items-center animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
export default TicketList;
