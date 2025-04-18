import { Suspense } from 'react';

import Heading from '@/components/heading';
import { Spinner } from '@/components/spinner';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import TicketCreateForm from '@/features/ticket/components/ticket-create-form';
import TicketList from '@/features/ticket/components/ticket-list';

const TicketPage = async () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading description="All your tickets" title="Tickets Page" />

      <Card className="w-full max-w-[450px] self-center">
        <CardHeader>
          <CardTitle>Create Ticket</CardTitle>
          <CardDescription>Create a new ticket entry</CardDescription>
        </CardHeader>
        <CardContent>
          <TicketCreateForm />
        </CardContent>
      </Card>

      <Suspense fallback={<Spinner size="xl" />}>
        <TicketList />
      </Suspense>
    </div>
  );
};
export default TicketPage;
