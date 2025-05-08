'use client';

import { LucideTrash } from 'lucide-react';
import { toast } from 'sonner';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TICKET_STATUS_LABELS } from '@/features/ticket/constants';
import { Ticket, TicketStatus } from '@/generated/prisma';

import { updateTicketStatus } from '../actions/update-ticket-status';

type TicketMoreMenuProps = {
  ticket: Ticket;
  trigger: React.ReactElement;
};

const TicketMoreMenu = ({ ticket, trigger }: TicketMoreMenuProps) => {
  const handleTicketStatusUpdate = async (value: string) => {
    const actionResult = await updateTicketStatus(
      ticket.id,
      value as TicketStatus,
    );

    if (actionResult.status === 'ERROR') {
      toast.error(`Error updating ticket status: ${actionResult.message}`);
    }

    if (actionResult.status === 'SUCCESS') {
      toast.success(actionResult.message);
    }
  };

  const deleteButton = (
    <DropdownMenuItem>
      <LucideTrash className="h-4 w-4" />
      <span>Delete</span>
    </DropdownMenuItem>
  );

  const ticketStatusRadioGroupItems = (
    <DropdownMenuRadioGroup
      value={ticket.status}
      onValueChange={handleTicketStatusUpdate}
    >
      {(Object.keys(TICKET_STATUS_LABELS) as Array<TicketStatus>).map((key) => (
        <DropdownMenuRadioItem key={key} value={key}>
          {TICKET_STATUS_LABELS[key]}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" side="right">
        {ticketStatusRadioGroupItems}
        <DropdownMenuSeparator className="bg-accent my-1 h-0.5" />
        {deleteButton}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TicketMoreMenu;
