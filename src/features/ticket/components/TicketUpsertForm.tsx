"use client";

import { Ticket } from "@prisma/client";
import { useActionState } from "react";

import FieldError from "@/components/form/FieldError";
import SubmitButton from "@/components/form/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { upsertTicket } from "../actions/upsertTicket";

interface TicketUpsertFormProps {
  ticket?: Ticket | null;
}

const TicketUpsertForm = ({ ticket = null }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    {
      message: "",
      fieldErrors: {},
      payload: new FormData(),
    }
  );
  return (
    <form action={action} className="flex flex-col gap-y-2">
      <div className="space-y-2">
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

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Enter ticket details..."
          className="w-full min-h-32"
          defaultValue={
            (actionState.payload?.get("content") as string) ?? ticket?.content
          }
        />
        {actionState.fieldErrors?.content && (
          <span className="text-sm text-red-500">
            {actionState.fieldErrors.content}
          </span>
        )}
      </div>
      <SubmitButton ticket={ticket} />
      <FieldError error={actionState.fieldErrors?.content} />
    </form>
  );
};
export default TicketUpsertForm;
