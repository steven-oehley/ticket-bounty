import Heading from "@/components/Heading";
import initialTickets from "@/data/data";
import TicketItem from "@/features/ticket/components/TicketItem";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place" />
      <div className="space-y-4 flex-1 flex flex-col items-center animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;
