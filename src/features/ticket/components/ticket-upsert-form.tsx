import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Ticket } from '@/generated/prisma';

import { upserticket } from '../actions/upsert-ticket';

interface TicketUpdateFormProps {
  ticket?: Ticket;
}

const TicketUpsertForm = ({ ticket }: TicketUpdateFormProps) => {
  return (
    <form
      action={upserticket.bind(null, ticket?.id)}
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
      <Button type="submit">{ticket ? 'Update' : 'Create'}</Button>
    </form>
  );
};
export default TicketUpsertForm;
