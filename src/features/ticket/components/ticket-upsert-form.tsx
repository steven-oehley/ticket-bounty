'use client';

import { useActionState } from 'react';

import SubmitBtn from '@/components/form/submit-btn';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Ticket } from '@/generated/prisma';

import { upserticket } from '../actions/upsert-ticket';

interface TicketUpdateFormProps {
  ticket?: Ticket;
}

const TicketUpsertForm = ({ ticket }: TicketUpdateFormProps) => {
  // allows us to attach state to the action we pass in
  // also requires initial state to be passed in
  // returns an enhanced action function and a state object
  const [actionState, action] = useActionState(
    upserticket.bind(null, ticket?.id),
    {
      message: '',
    },
  );
  return (
    <form action={action} className="flex flex-col gap-y-3">
      <Label htmlFor="title">Title</Label>
      <Input
        required
        defaultValue={
          (actionState.payload?.get('title') as string) ?? ticket?.title
        }
        id="title"
        name="title"
        type="text"
      />
      <Label htmlFor="content">Content</Label>
      <Textarea
        required
        defaultValue={
          (actionState.payload?.get('content') as string) ?? ticket?.content
        }
        id="content"
        name="content"
      />
      <SubmitBtn label={ticket ? 'Update' : 'Create'} />
      <span>{actionState.message}</span>
    </form>
  );
};
export default TicketUpsertForm;
