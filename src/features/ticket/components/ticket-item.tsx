import Link from 'next/link';

import clsx from 'clsx';
import { LucideEye, LucidePencilLine, LucideTrash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { editTicketPath, ticketPath } from '@/constants/paths';
import { Ticket } from '@/generated/prisma/client';

import { deleteTicket } from '../actions/delete-ticket';
import { TICKET_ICONS } from '../constants';

interface TicketItemProps {
  ticket: Ticket;
  previewCard?: boolean;
}

const TicketItem = ({ ticket, previewCard = false }: TicketItemProps) => {
  const deleteBtn = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant="outline">
        <LucideTrash2 />
      </Button>
    </form>
  );

  const detailBtn = (
    <Button asChild variant="outline">
      <Link className="text-sm" href={ticketPath(ticket.id)} prefetch={true}>
        <LucideEye />
      </Link>
    </Button>
  );

  const editBtn = (
    <Button asChild variant="outline">
      <Link href={editTicketPath(ticket.id)} prefetch={true}>
        <LucidePencilLine />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx('animate-fade-from-top flex w-full gap-x-2', {
        'max-w-[450px]': previewCard,
        'max-w-[580px]': !previewCard,
      })}
    >
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate text-lg font-semibold">
              {ticket.title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx('line-clamp-3 whitespace-break-spaces', {
              'line-clamp-3': previewCard,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex-col space-y-2">
        {previewCard && detailBtn}
        {editBtn}
        {deleteBtn}
      </div>
    </div>
  );
};
export default TicketItem;
