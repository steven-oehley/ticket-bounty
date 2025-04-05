import Link from 'next/link';

import { LucideEye } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketPath } from '@/constants/paths';

import { TICKET_ICONS } from '../constants';
import { Ticket } from '../types';

interface TicketItemProps {
  ticket: Ticket;
}

const TicketItem = ({ ticket }: TicketItemProps) => {
  const detailBtn = (
    <Button asChild variant="outline">
      <Link className="text-sm" href={ticketPath(ticket.id)}>
        <LucideEye />
      </Link>
    </Button>
  );
  return (
    <div className="animate-fade-from-top flex w-full max-w-1/5 gap-x-2">
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
          <span className="line-clamp-3 whitespace-break-spaces">
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex-col gap-y-1"> {detailBtn}</div>
    </div>
  );
};
export default TicketItem;
