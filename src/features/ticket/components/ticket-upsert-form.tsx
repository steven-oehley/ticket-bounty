'use client';

import { useTransition } from 'react';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Ticket } from '@/generated/prisma';

import { upserticket } from '../actions/upsert-ticket';

interface TicketUpdateFormProps {
  ticket?: Ticket;
}

const TicketUpsertForm = ({ ticket }: TicketUpdateFormProps) => {
  const [isPending, startTransition] = useTransition();

  const upsertTicketAction = (formData: FormData) => {
    startTransition(async () => {
      // pass form data manually to the upserticket function
      // normally browser does this automatically
      // but in this case we need to pass the ticket id to the upserticket function
      await upserticket.bind(null, ticket?.id)(formData);
    });
  };

  return (
    <form action={upsertTicketAction} className="flex flex-col gap-y-3">
      <Label htmlFor="title">Title</Label>
      <Input defaultValue={ticket?.title} id="title" name="title" type="text" />
      <Label htmlFor="content">Content</Label>
      <Textarea
        defaultValue={ticket?.content}
        id="content"
        name="content"
      ></Textarea>
      <Button type="submit">
        {isPending && <Spinner className="text-base" inline={true} size="sm" />}
        {ticket ? 'Update' : 'Create'}
      </Button>
    </form>
  );
};
export default TicketUpsertForm;
