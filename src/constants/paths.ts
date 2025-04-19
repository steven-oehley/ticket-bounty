const homePath = '/';
const ticketsPath = '/tickets';
const ticketPath = (ticketId: string) => `/tickets/${ticketId}`;
const editTicketPath = (ticketId: string) => `${ticketPath(ticketId)}/edit`;

export { editTicketPath, homePath, ticketPath, ticketsPath };
