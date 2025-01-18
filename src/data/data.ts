import { Ticket } from "@/constants/types";

export const initialTickets: Ticket[] = [
  {
    id: 1,
    title: "Implement User Authentication",
    status: "OPEN",
    content: "Set up JWT authentication system with login/logout functionality",
  },
  {
    id: 2,
    title: "Fix Navigation Menu Bug",
    status: "DONE",
    content: "Resolve dropdown menu not closing on mobile devices",
  },
  {
    id: 3,
    title: "Add Payment Integration",
    status: "IN_PROGRESS",
    content: "Integrate Stripe payment gateway for premium subscriptions",
  },
  {
    id: 4,
    title: "Optimize Image Loading",
    status: "OPEN",
    content: "Implement lazy loading for better performance on image gallery",
  },
  {
    id: 5,
    title: "Update Documentation",
    status: "DONE",
    content: "Update API documentation with new endpoints and examples",
  },
];

export default initialTickets;
