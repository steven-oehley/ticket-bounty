import Link from 'next/link';

import clsx from 'clsx';
import { LucideEye } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketPath } from '@/constants/paths';

import { TICKET_ICONS } from '../constants';
import { Ticket } from '../types';

interface TicketItemProps {
  ticket: Ticket;
  showOptions?: boolean;
}

const TicketItem = ({ ticket, showOptions = false }: TicketItemProps) => {
  const detailBtn = (
    <Button asChild variant="outline">
      <Link className="text-sm" href={ticketPath(ticket.id)}>
        <LucideEye />
      </Link>
    </Button>
  );
  return (
    <div
      className={clsx('animate-fade-from-top flex w-full gap-x-2', {
        'max-w-1/3': !showOptions,
        'max-w-1/5': showOptions,
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
              'line-clamp-3': showOptions,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {showOptions ? <div className="flex-col gap-y-1">{detailBtn}</div> : null}
    </div>
  );
};
export default TicketItem;
