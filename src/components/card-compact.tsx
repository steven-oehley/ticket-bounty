import clsx from 'clsx';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CardCompactProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

const CardCompact = ({
  title,
  description,
  children,
  className,
  footer,
}: CardCompactProps) => {
  return (
    <Card className={clsx('w-full max-w-[450px] self-center', className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
export default CardCompact;
