"use client";

import { Ticket } from "@prisma/client";
import { useActionState } from "react";

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
          required
          className="w-full"
          defaultValue={
            (actionState.payload?.get("title") as string) ?? ticket?.title
          }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Enter ticket details..."
          required
          className="w-full min-h-32"
          defaultValue={
            (actionState.payload?.get("content") as string) ?? ticket?.content
          }
        />
      </div>
      <SubmitButton ticket={ticket} />
      {actionState?.message}
    </form>
  );
};
export default TicketUpsertForm;
