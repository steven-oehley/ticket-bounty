import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Ticket } from '@/generated/prisma';

import { updateTicket } from '../actions/update-ticket';

interface TicketUpdateFormProps {
  ticket: Ticket;
}

const TicketUpdateForm = ({ ticket }: TicketUpdateFormProps) => {
  return (
    <form
      action={updateTicket.bind(null, ticket.id)}
      className="flex flex-col gap-y-3"
    >
      <Label htmlFor="title">Title</Label>
      <Input defaultValue={ticket.title} id="title" name="title" type="text" />
      <Label htmlFor="content">Content</Label>
      <Textarea
        defaultValue={ticket.content}
        id="content"
        name="content"
      ></Textarea>
      <Button type="submit">Update</Button>
    </form>
  );
};
export default TicketUpdateForm;
