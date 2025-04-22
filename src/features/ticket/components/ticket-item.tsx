import clsx from 'clsx';
import { LucideEye, LucidePencilLine, LucideTrash2 } from 'lucide-react';

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

import { deleteTicket } from '../actions/delete-ticket';
import { TICKET_ICONS } from '../constants';

import ItemActionButton from './item-action-btn';
import ItemLinkButton from './item-link-btn';

interface TicketItemProps {
  ticket: Ticket;
  previewCard?: boolean;
}

const TicketItem = ({ ticket, previewCard = false }: TicketItemProps) => {
  const deleteBtn = (
    <ItemActionButton
      action={deleteTicket.bind(null, ticket.id)}
      icon={<LucideTrash2 />}
    />
  );

  const detailBtn = (
    <ItemLinkButton icon={<LucideEye />} path={ticketPath(ticket.id)} />
  );

  const editBtn = (
    <ItemLinkButton
      icon={<LucidePencilLine />}
      path={editTicketPath(ticket.id)}
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
      <div className="flex-col space-y-2">
        {previewCard && detailBtn}
        {editBtn}
        {!previewCard && deleteBtn}
      </div>
    </div>
  );
};
export default TicketItem;
