'use client';

import { LucideTrash2 } from 'lucide-react';
import { toast } from 'sonner';

import useConfirmDialog from '@/components/confirm-dialog';
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

import { deleteTicket } from '../actions/delete-ticket';
import { updateTicketStatus } from '../actions/update-ticket-status';

type TicketMoreMenuProps = {
  ticket: Ticket;
  trigger: React.ReactElement;
};

const TicketMoreMenu = ({ ticket, trigger }: TicketMoreMenuProps) => {
  const [deleteBtn, deleteDialog] = useConfirmDialog({
    action: deleteTicket.bind(null, ticket.id),
    description: 'Are you sure you want to delete this ticket?',
    title: 'Delete Ticket',
    trigger: (
      <DropdownMenuItem>
        <LucideTrash2 className="h-4 w-4" />
        <span>Delete</span>
      </DropdownMenuItem>
    ),
  });
  const handleTicketStatusUpdate = async (value: string) => {
    const actionResultPromise = updateTicketStatus(
      ticket.id,
      value as TicketStatus,
    );

    toast.promise(actionResultPromise, {
      loading: 'Updating ticket status...',
    });

    const actionResult = await actionResultPromise;

    if (actionResult.status === 'ERROR') {
      toast.error(`Error updating ticket status: ${actionResult.message}`);
    }

    if (actionResult.status === 'SUCCESS') {
      toast.success(actionResult.message);
    }
  };

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
    <>
      {deleteDialog}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" side="right">
          {ticketStatusRadioGroupItems}
          <DropdownMenuSeparator className="bg-accent my-1 h-0.5" />
          {deleteBtn}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default TicketMoreMenu;
