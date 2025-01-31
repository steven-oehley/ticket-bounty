import { notFound } from "next/navigation";

import CardCompact from "@/components/CardCompact";
import TicketEditForm from "@/features/ticket/components/TicketEditForm";
import { getTicket } from "@/features/ticket/queries/getTicket";

interface TicketEditFormProps {
  params: Promise<{ ticketId: string }>;
}

const TicketEditPage = async ({ params }: TicketEditFormProps) => {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-y-8 justify-center items-center">
      <CardCompact
        className="w-full max-w-2xl animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out"
        title="Edit Ticket"
        description="Edit an existing ticket"
      >
        <TicketEditForm ticket={ticket} />
      </CardCompact>
    </div>
  );
};
export default TicketEditPage;
