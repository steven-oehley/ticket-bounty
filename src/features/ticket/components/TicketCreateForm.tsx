import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { createTicket } from "../actions/createTicket";

const TicketCreateForm = () => {
  return (
    <form action={createTicket} className="flex flex-col gap-y-2 w-full">
      <div className="space-y-2 w-full">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="Enter ticket title..."
          required
          className="w-full"
        />
      </div>

      <div className="space-y-2 w-full">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Enter ticket details..."
          required
          className="w-full min-h-32"
        />
      </div>

      <Button type="submit" className="w-full">
        Create Ticket
      </Button>
    </form>
  );
};
export default TicketCreateForm;
