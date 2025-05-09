export const homePath = '/';

export const ticketsPath = '/tickets';
export const ticketPath = (ticketId: string) => `/tickets/${ticketId}`;
export const editTicketPath = (ticketId: string) =>
  `${ticketPath(ticketId)}/edit`;

export const signUpPath = '/sign-up';
export const signInPath = '/sign-in';
export const passwordForgotPath = '/password-forgot';
