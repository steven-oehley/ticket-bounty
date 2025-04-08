import { Suspense } from 'react';

import Heading from '@/components/heading';
import { Spinner } from '@/components/spinner';
import TicketList from '@/features/ticket/components/ticket-list';

const TicketPage = async () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading description="All your tickets" title="Tickets Page" />
      <Suspense fallback={<Spinner size="xl" />}>
        <TicketList />
      </Suspense>
    </div>
  );
};
export default TicketPage;
