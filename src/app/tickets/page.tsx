import { Suspense } from 'react';

import CardCompact from '@/components/card-compact';
import Heading from '@/components/heading';
import { Spinner } from '@/components/spinner';
import TicketCreateForm from '@/features/ticket/components/ticket-create-form';
import TicketList from '@/features/ticket/components/ticket-list';

const TicketPage = async () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading description="All your tickets" title="Tickets Page" />
      <CardCompact description="Add a new ticket entry" title="Create Ticket">
        <TicketCreateForm />
      </CardCompact>
      <Suspense fallback={<Spinner size="xl" />}>
        <TicketList />
      </Suspense>
    </div>
  );
};
export default TicketPage;
