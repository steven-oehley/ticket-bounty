import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ticketPath } from "@/constants/paths";

interface TicketItemButtonProps {
  ticketId: number;
}

const TicketItemButton = ({ ticketId }: TicketItemButtonProps) => {
  return (
    <div>
      <Link href={ticketPath(ticketId)} className="text-sm underline">
        <Button variant={"secondary"}>
          <LucideSquareArrowOutUpRight />
        </Button>
      </Link>
    </div>
  );
};
export default TicketItemButton;
