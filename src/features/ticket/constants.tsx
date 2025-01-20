import { LucideCheckCheck, LucideFolderOpen, LucideLoader } from "lucide-react";

import { TicketIcons } from "./types";

const TICKET_ICONS: TicketIcons = {
  OPEN: <LucideCheckCheck />,
  IN_PROGRESS: <LucideLoader />,
  DONE: <LucideFolderOpen />,
};

export { TICKET_ICONS };
