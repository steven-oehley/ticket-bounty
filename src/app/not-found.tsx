import Link from 'next/link';

import { LucideBinoculars } from 'lucide-react';

import Placeholder from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { ticketsPath } from '@/constants/paths';

const NotFound = () => {
  return (
    <Placeholder
      button={
        <Button asChild variant="outline">
          <Link href={ticketsPath}>Go back to Tickets Page</Link>
        </Button>
      }
      label="Ticket Not Found"
      renderIcon={(props) => <LucideBinoculars {...props} />}
    />
  );
};
export default NotFound;
