import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Ticket } from '@/generated/prisma';

import { upserticket } from '../actions/upsert-ticket';

interface TicketUpdateFormProps {
  ticket?: Ticket | null;
}

const TicketUpsertForm = ({ ticket = null }: TicketUpdateFormProps) => {
  const ticketId = ticket?.id || '';
  return (
    <form
      action={upserticket.bind(null, ticketId)}
      className="flex flex-col gap-y-3"
    >
      <Label htmlFor="title">Title</Label>
      <Input defaultValue={ticket?.title} id="title" name="title" type="text" />
      <Label htmlFor="content">Content</Label>
      <Textarea
        defaultValue={ticket?.content}
        id="content"
        name="content"
      ></Textarea>
      <Button type="submit">Update</Button>
    </form>
  );
};
export default TicketUpsertForm;
