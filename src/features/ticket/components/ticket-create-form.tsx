import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const TicketCreateForm = () => {
  return (
    <form action="" className="flex flex-col gap-y-3">
      <Label htmlFor="title">Title</Label>
      <Input id="title" type="text" />
      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content"></Textarea>
      <Button type="submit">Create</Button>
    </form>
  );
};
export default TicketCreateForm;
