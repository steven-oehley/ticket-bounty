"use client";

import { Ticket } from "@prisma/client";
import { useActionState } from "react";

import FieldError from "@/components/form/FieldError";
import Form from "@/components/form/Form";
import SubmitButton from "@/components/form/SubmitButton";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/fromErrorToActionState";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fromCent } from "@/utils/currency";

import { upsertTicket } from "../actions/upsertTicket";

interface TicketUpsertFormProps {
  ticket?: Ticket | null;
}

const TicketUpsertForm = ({ ticket = null }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  return (
    <Form action={action} actionState={actionState}>
      <div className="space-y-1">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="Enter ticket title..."
          className="w-full"
          defaultValue={
            (actionState.payload?.get("title") as string) ?? ticket?.title
          }
        />
        <FieldError error={actionState.fieldErrors?.title} />
      </div>

      <div className="space-y-1">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Enter ticket details..."
          className="w-full min-h-20"
          defaultValue={
            (actionState.payload?.get("content") as string) ?? ticket?.content
          }
        />
        <FieldError error={actionState.fieldErrors?.content} />
      </div>

      <div className="space-y-1">
        <Label htmlFor="deadline">Deadline</Label>
        <Input
          id="deadline"
          name="deadline"
          type="date"
          className="w-full"
          defaultValue={
            (actionState.payload?.get("deadline") as string) ?? ticket?.deadline
          }
        />
        <FieldError error={actionState.fieldErrors?.deadline} />
      </div>

      <div className="space-y-1">
        <Label htmlFor="bounty">Bounty</Label>
        <Input
          id="bounty"
          name="bounty"
          type="number"
          step={0.01}
          className="w-full"
          defaultValue={
            (actionState.payload?.get("bounty") as string) ??
            (ticket?.bounty ? fromCent(ticket?.bounty) : "")
          }
        />
        <FieldError error={actionState.fieldErrors?.bounty} />
      </div>

      <SubmitButton ticket={ticket} />
      {actionState.message && <p>{actionState.message}</p>}
    </Form>
  );
};
export default TicketUpsertForm;
