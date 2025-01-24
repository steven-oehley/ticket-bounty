import { ReactNode } from "react";

type TicketStatus = "OPEN" | "IN_PROGRESS" | "DONE";

interface TicketIcons {
  OPEN: ReactNode;
  DONE: ReactNode;
  IN_PROGRESS: ReactNode;
}

export { type TicketIcons, type TicketStatus };
