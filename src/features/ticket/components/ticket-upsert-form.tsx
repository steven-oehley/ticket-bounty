'use client';

import { useActionState } from 'react';

import { toast } from 'sonner';

import FieldError from '@/components/form/field-error';
import Form from '@/components/form/form';
import { useActionFeedback } from '@/components/form/hooks/use-action-feedback';
import SubmitBtn from '@/components/form/submit-btn';
import { EMPTY_ACTION_STATE } from '@/components/form/utils/to-action-state';
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
  const [actionState, action, isPending] = useActionState(
    upserticket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE,
  );

  useActionFeedback(actionState, {
    // could also use closures and not need to pass actionState
    // pass as object so can extend later if needed
    onError: ({ actionState }) => {
      // if we have a field error we have no message so don't show toast
      if (actionState.message) toast.error(actionState.message);
    },
    onSuccess: ({ actionState }) => {
      if (actionState.message) toast.success(actionState.message);
    },
  });

  return (
    <Form action={action}>
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
      <FieldError actionState={actionState} name="title" />
      <Label htmlFor="content">Content</Label>
      <Textarea
        required
        defaultValue={
          (actionState.payload?.get('content') as string) ?? ticket?.content
        }
        id="content"
        name="content"
      />
      <FieldError actionState={actionState} name="content" />
      <div className="flex gap-x-2">
        <div className="flex w-1/2 flex-col gap-y-1">
          <Label htmlFor="deadline">Deadline</Label>
          <Input
            required
            defaultValue={
              (actionState.payload?.get('deadline') as string) ??
              ticket?.deadline
            }
            id="deadline"
            name="deadline"
            type="date"
          />
          <FieldError actionState={actionState} name="deadline" />
        </div>
        <div className="flex w-1/2 flex-col gap-y-1">
          <Label htmlFor="bounty">Bounty ($)</Label>
          <Input
            required
            defaultValue={
              (actionState.payload?.get('bounty') as string) ?? ticket?.bounty
            }
            id="bounty"
            max={10000}
            min={1}
            name="bounty"
            step={0.01}
            type="number"
          />
          <FieldError actionState={actionState} name="bounty" />
        </div>
      </div>
      <SubmitBtn isPending={isPending} label={ticket ? 'Update' : 'Create'} />
    </Form>
  );
};
export default TicketUpsertForm;
