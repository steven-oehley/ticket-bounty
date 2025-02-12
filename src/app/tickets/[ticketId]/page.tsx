import Link from "next/link";

import Placeholder from "@/components/Placeholder";
import { RedirectToast } from "@/components/RedirectToast";
import { Button } from "@/components/ui/button";
import { homePath } from "@/constants/paths";
import TicketItem from "@/features/ticket/components/TicketItem";
import { getTicket } from "@/features/ticket/queries/getTicket";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

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
    <>
      <div className="flex justify-center items-center animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out">
        <TicketItem ticket={ticket} isDetail={true} />
      </div>
      <RedirectToast />
    </>
  );
};

export default TicketPage;
