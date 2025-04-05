export interface Ticket {
  id: string;
  title: string;
  content: string;
  status: 'DONE' | 'IN_PROGRESS' | 'OPEN';
}
