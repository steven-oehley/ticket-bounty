import { Suspense } from 'react';

import CardCompact from '@/components/card-compact';
import Heading from '@/components/heading';
import { Spinner } from '@/components/spinner';
import TicketList from '@/features/ticket/components/ticket-list';
import TicketUpsertForm from '@/features/ticket/components/ticket-upsert-form';

const TicketsPage = async () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading description="All your tickets" title="Tickets Page" />
      <CardCompact description="Add a new ticket entry" title="Create Ticket">
        <TicketUpsertForm />
      </CardCompact>
      <Suspense fallback={<Spinner size="xl" />}>
        <TicketList />
      </Suspense>
    </div>
  );
};
export default TicketsPage;
