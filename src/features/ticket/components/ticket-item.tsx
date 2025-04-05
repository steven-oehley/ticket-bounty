import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ticketPath } from '@/constants/paths';

import { TICKET_ICONS } from '../constants';
import { Ticket } from '../types';

interface TicketItemProps {
  ticket: Ticket;
}

const TicketItem = ({ ticket }: TicketItemProps) => {
  return (
    <Card key={ticket.id} className="w-full max-w-[420px]">
      <CardHeader>
        <CardTitle className="flex gap-2">
          <span>{TICKET_ICONS[ticket.status]}</span>
          <span className="truncate text-lg font-semibold">{ticket.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className="line-clamp-3 whitespace-break-spaces">
          {ticket.content}
        </span>
      </CardContent>
      <CardFooter>
        <Link className="text-sm underline" href={ticketPath(ticket.id)}>
          View
        </Link>
      </CardFooter>
    </Card>
  );
};
export default TicketItem;
