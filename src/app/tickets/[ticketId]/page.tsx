import Link from "next/link";

import { TICKET_ICONS } from "@/constants/constants";
import { homePath } from "@/constants/paths";
import initialTickets from "@/data/data";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find(
    (ticket) => ticket.id === parseInt(ticketId)
  );

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  console.log(ticketId);
  return (
    <div>
      <h2 className="text-lg font-semibold">{ticket.title}</h2>
      <p>Ticket ID: {ticket.id}</p>
      <p>{ticket.content}</p>
      <p>
        Status: {ticket.status} {TICKET_ICONS[ticket.status]}
      </p>
      <div>
        <Link className="text-sm underline block mt-8" href={homePath}>
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default TicketPage;
