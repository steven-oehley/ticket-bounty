import { Suspense } from "react";

import CardCompact from "@/components/CardCompact";
import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import TicketList from "@/features/ticket/components/TicketList";
import TicketUpsertForm from "@/features/ticket/components/TicketUpsertForm";

// enable dynamically rendered at request time, bypassing static optimization
// not best approach, but can be useful in some cases
// export const dynamic = "force-dynamic";

const TicketsPage = () => {
  return (
    <>
      <div className="flex-1 flex flex-col  w-full">
        <div className="max-w-xl mx-auto w-full space-y-8">
          <Heading
            title="Tickets"
            description="All your tickets in one place"
          />
          <CardCompact
            className="animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out"
            title="Create Ticket"
            description="Create a new ticket"
          >
            <TicketUpsertForm />
          </CardCompact>
          <Suspense fallback={<Spinner />}>
            <TicketList />
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default TicketsPage;

// below not work with Suspense
// the await is outside the Suspense component
// fix by placing the await and div in seperate componet like above

// import Heading from "@/components/Heading";
// import TicketItem from "@/features/ticket/components/TicketItem";
// import { getTickets } from "@/features/ticket/queries/getTickets";
// import { Suspense } from "react";

// const TicketsPage = async () => {
//   const tickets = await getTickets();

//   return (
//     <div className="flex-1 flex flex-col gap-y-8">
//       <Heading title="Tickets" description="All your tickets in one place" />
//       <Suspense>
//         <div className="space-y-4 flex-1 flex flex-col items-center animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out">
//           {tickets.map((ticket) => (
//             <TicketItem key={ticket.id} ticket={ticket} />
//           ))}
//         </div>
//       </Suspense>
//     </div>
//   );
// };
// export default TicketsPage;
