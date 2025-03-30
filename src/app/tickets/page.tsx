import Link from 'next/link';

import {
  LucideCircleCheckBig,
  LucideFolderOpen,
  LucideLoaderCircle,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ticketPath } from '@/constants/paths';
import { initialTickets } from '@/data/data';

const TICKET_ICONS = {
  DONE: <LucideCircleCheckBig />,
  IN_PROGRESS: <LucideLoaderCircle />,
  OPEN: <LucideFolderOpen />,
};

const TicketPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-muted-foreground text-sm">All your tickets</p>
      </div>
      <Separator />
      <div className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
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
            <CardFooter>
              <Link className="text-sm underline" href={ticketPath(ticket.id)}>
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default TicketPage;
