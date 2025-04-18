'use client';

import Link from 'next/link';

import clsx from 'clsx';
import { LucideEye, LucideTrash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketPath } from '@/constants/paths';
import { Ticket } from '@/generated/prisma/client';

import { deleteTicket } from '../actions/delete-ticket';
import { TICKET_ICONS } from '../constants';

interface TicketItemProps {
  ticket: Ticket;
  previewCard?: boolean;
}

const TicketItem = ({ ticket, previewCard = false }: TicketItemProps) => {
  const handleDeleteTicket = async () => {
    await deleteTicket(ticket.id);
  };

  const detailBtn = (
    <Button asChild variant="outline">
      <Link className="text-sm" href={ticketPath(ticket.id)}>
        <LucideEye />
      </Link>
    </Button>
  );
  const deleteBtn = (
    <Button variant="outline" onClick={handleDeleteTicket}>
      <LucideTrash2 />
    </Button>
  );

  return (
    <div
      className={clsx('animate-fade-from-top flex w-full gap-x-2', {
        'max-w-[420px]': previewCard,
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
        {previewCard ? detailBtn : deleteBtn}
      </div>
    </div>
  );
};
export default TicketItem;
