import { Session } from 'next-auth';

export interface BasicHeaderProps {
  className?: string;
  session: Session | null;
}
