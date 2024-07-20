import { Session } from 'next-auth';

export interface ILayoutWithHeaderProps {
  className?: string;
  session: Session | null;
}
