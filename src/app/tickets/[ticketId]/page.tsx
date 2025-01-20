import Link from "next/link";

import Placeholder from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { homePath } from "@/constants/paths";
import initialTickets from "@/data/data";
import TicketItem from "@/features/ticket/components/TicketItem";
import { type Ticket as TicketType } from "@/features/ticket/types";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find(
    (ticket) => ticket.id === parseInt(ticketId)
  ) as TicketType | undefined;

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={homePath}>Back Home</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="flex justify-center items-center animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out">
      <TicketItem ticket={ticket} isDetail={true} />
    </div>
  );
};

export default TicketPage;
