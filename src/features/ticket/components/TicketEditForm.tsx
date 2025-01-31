import { Ticket } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { editTicket } from "../actions/editTicket";

interface TicketEditFormProps {
  ticket: Ticket;
}

const TicketEditForm = ({ ticket }: TicketEditFormProps) => {
  return (
    <form
      action={editTicket.bind(null, ticket.id)}
      className="flex flex-col gap-y-2"
    >
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          //   value={formData.title}
          placeholder="Enter ticket title..."
          required
          className="w-full"
          defaultValue={ticket.title}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          //   value={formData.content}
          placeholder="Enter ticket details..."
          required
          className="w-full min-h-32"
          defaultValue={ticket.content}
        />
      </div>

      <Button type="submit" className="w-full">
        Update Ticket
      </Button>
    </form>
  );
};
export default TicketEditForm;
