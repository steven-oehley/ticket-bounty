import { ReactNode } from "react";

type TicketStatus = "OPEN" | "IN_PROGRESS" | "DONE";

// Type for a ticket
interface Ticket {
  id: number;
  title: string;
  status: TicketStatus;
  content: string;
}

interface TicketIcons {
  OPEN: ReactNode;
  DONE: ReactNode;
  IN_PROGRESS: ReactNode;
}

export { type Ticket, type TicketIcons, type TicketStatus };
