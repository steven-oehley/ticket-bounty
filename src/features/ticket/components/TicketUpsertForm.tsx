"use client";

import { Ticket } from "@prisma/client";
import { LucideLoaderCircle } from "lucide-react";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { upsertTicket } from "../actions/upsertTicket";

interface TicketUpsertFormProps {
  ticket?: Ticket | null;
}

const TicketUpsertForm = ({ ticket = null }: TicketUpsertFormProps) => {
  const [isPending, startTransition] = useTransition();

  const upsertTicketAction = (formData: FormData) => {
    startTransition(async () => {
      await upsertTicket.bind(null, ticket?.id)(formData);
    });
  };

  return (
    <form action={upsertTicketAction} className="flex flex-col gap-y-2">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="Enter ticket title..."
          required
          className="w-full"
          defaultValue={ticket?.title}
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
          defaultValue={ticket?.content}
        />
      </div>

      <Button type="submit" className="w-full">
        {isPending && (
          <LucideLoaderCircle className="animate-spin w-4 h-4 mr-2" />
        )}
        {ticket ? "Edit Ticket" : "Create Ticket"}
      </Button>
    </form>
  );
};
export default TicketUpsertForm;
