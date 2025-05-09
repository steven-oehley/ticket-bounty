import clsx from 'clsx';
import { LucideEye, LucideMoreVertical, LucidePencilLine } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { editTicketPath, ticketPath } from '@/constants/paths';
import { Ticket } from '@/generated/prisma/client';
import { toCurrencyFromCent } from '@/utils/currency';

import { TICKET_ICONS } from '../constants';

import ItemLinkButton from './item-link-btn';
import TicketMoreMenu from './ticket-more-menu';

interface TicketItemProps {
  ticket: Ticket;
  previewCard?: boolean;
}

const TicketItem = ({ ticket, previewCard = false }: TicketItemProps) => {
  const detailBtn = (
    <ItemLinkButton icon={<LucideEye />} path={ticketPath(ticket.id)} />
  );

  const editBtn = (
    <ItemLinkButton
      icon={<LucidePencilLine />}
      path={editTicketPath(ticket.id)}
    />
  );

  const moreMenu = (
    <TicketMoreMenu
      ticket={ticket}
      trigger={
        <Button size="icon" variant="outline">
          <LucideMoreVertical className="h-4 w-4" />
        </Button>
      }
    />
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
        <CardFooter className="flex justify-between">
          <span className="text-muted-foreground text-xs">
            {ticket.deadline}
          </span>
          <span className="text-muted-foreground text-xs">
            {toCurrencyFromCent(ticket.bounty)}
          </span>
        </CardFooter>
      </Card>
      <div className="flex flex-col space-y-2">
        {previewCard && detailBtn}
        {editBtn}
        {!previewCard && moreMenu}
      </div>
    </div>
  );
};
export default TicketItem;
